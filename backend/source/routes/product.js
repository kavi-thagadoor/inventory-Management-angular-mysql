import express from 'express';
import * as productController from '../controller/productController.js';
import { verifyUserToken } from '../constant.js'; // adjust path

const productRouter = express.Router();

productRouter.post('/product/add-products', verifyUserToken, productController.addProduct);
productRouter.post('/product/get-products', verifyUserToken, productController.getProduct);
productRouter.post('/product/get-productById', verifyUserToken, productController.getProductById);
productRouter.post('/product/update-product', verifyUserToken, productController.updateProduct);
productRouter.post('/product/delete-product', verifyUserToken, productController.deleteProduct);
export default productRouter;

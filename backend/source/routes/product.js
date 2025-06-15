import express from 'express'
import * as productController from '../controller/productController.js';

const productRouter = express.Router();

productRouter.post('/add-products',productController.addProduct);
productRouter.post('/get-products',productController.getProduct);
productRouter.post('/update-product',productController.updateProduct);
productRouter.post('/delete-product',productController.deleteProduct);

export default productRouter;
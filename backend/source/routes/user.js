import express from 'express'
import * as userController from '../controller/userController.js';

const userRouter = express.Router();

userRouter.get('/version',userController.version);
userRouter.post('/add-user',userController.addUser);
userRouter.post('/get-user-by-id',userController.getUserById);
userRouter.post('/loginUser',userController.loginUser);


export default userRouter;
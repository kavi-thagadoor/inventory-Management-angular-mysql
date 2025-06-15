import express from 'express'
import bodyParser from 'body-parser';
import productRouter from './routes/product.js'
import userRouter from './routes/user.js'
import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = process.env.PORT || 6000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', productRouter);
app.use('/', userRouter);

app.listen(port ,()=>{
    console.log("Server is Running Port Is",+port)
})


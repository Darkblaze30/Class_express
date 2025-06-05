import express from 'express'
import bodyParser from 'body-parser'
import 'dotenv/config'
import productRouter from './routes/product.router.js';
import userRouter from './routes/user.router.js';





const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(`${import.meta.dirname}/public`))

app.use('/product', productRouter)

app.use('/user', userRouter)



app.listen({
    hostname: process.env.APP_HOSTNAME,
    port: process.env.APP_PORT,
},(req,res) => {
    console.log(`server listener http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`);
})
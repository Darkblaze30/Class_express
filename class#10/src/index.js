import  express from "express";
import 'dotenv/config'
import {productsRouter} from'./entities/products/index.js'

const app = express()

app.use(express.json())
app.use('/products', productsRouter)

app.listen({
    hostname: process.env.APP_HOSTNAME,
    port: process.env.APP_PORT
}, () => {
    console.log(`App running on http://${process.env.APP_HOSTNAME}:${process.env.APP_PORT}`);
})
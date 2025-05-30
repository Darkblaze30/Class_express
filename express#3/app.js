
import express from 'express';
import 'dotenv/config'
import productRouter from './routers/products.js';
import categoriesRouter from './routers/categories.js';



const app = express();


app.use('/products', productRouter) 
app.use('/categories', categoriesRouter) 

app.listen({ 
    hostname: process.env.SERVER_HOSTNAME,
    port: process.env.SERVER_PORT
 },
 ()=> console.log(`Server listen on http://${process.env.SERVER_HOSTNAME}:${process.env.SERVER_PORT}`));
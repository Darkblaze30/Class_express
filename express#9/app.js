import  express  from "express";
import 'dotenv/config'
import appLimiter from "./middleware/rate-limit-middleware.js";
const app = express()



console.log(process.env.WINDOW_RATE_LIMIT);
app.use('/student', appLimiter)

app.get('/', (req,res)=> res.send('Hey there'))
app.get('/student', (req,res)=> res.send({name: 'pepe', language: 'English', age: 20}))

app.listen({
    hostname: process.env.APP_HOSTNAME,
    port: process.env.PORT
},() => {
    console.log(`App running on http://${process.env.APP_HOSTNAME}:${process.env.PORT}`);
})
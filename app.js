import express from "express";
import 'dotenv/config'

const app = express();

const path = process.env.HTTP_STATIC
const root = import.meta.dirname

//no ponerlo todavia
app.use(express.static(path))

app.get("/", function (req, res) {
  res.sendFile('./public/index.html', {root});
});

app.use((req,res) => {
    res.status(404).sendFile('./public/views/404.html', {root})
})

app.listen({
    hostname: process.env.HTTP_NAME,
    port: process.env.HTTP_PORT
}, () => {
    console.log(`App is listen now on: http://${process.env.HTTP_HOSTNAME}:${process.env.HTTP_PORT}`);
});

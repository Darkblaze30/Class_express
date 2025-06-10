import express from 'express'
import semver from 'semver'
import userRouter from './user.router.js';

const app = express()
const PORT = 3000;

app.get('/user',userRouter);

app.listen(PORT, ()=> {
    console.log(`Servidor escuchado en http://localhost:${PORT}`);
})
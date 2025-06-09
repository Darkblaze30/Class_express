import express from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import 'dotenv/config'

const app = express();

app.use(cookieParser('campus2025'));
app.use(cookieSession({secret: 'campus2025'}))

const verificarAutenticacion = (req, res, next) => {
    const auth = req.cookies.auth
    if(!auth){
        return res.status(401).send('Usuario no autenticado. Prohibido el acceso')
    }

    next()
}

app.get('/crearCookie',(req, res) => {
    res.cookie('expressCookie', 'Esto es una cookie',{signed: true, secure: true});
    res.send('Se creo una cookie')
})

app.get('/crearCookieSesion',(req, res) => {
    res.session.cookieSession = 'Het there!'
    res.send('Se creo una cookie')
})

app.get('/leerCookie', (req,res) => {
    const valSigned = req.signedCookies.expressCookie;
    if(valSigned) res.send('El valor de la cookie firmada expressCookie es: ' + valSigned)
    else res.send('La cookie expressCookie no fue firmada o no existe');
})

app.get('/eliminarCookie', (req,res) => {
    res.clearCookie('expressCookie')
    res.send('Se elimino la cookie expressCookie');
})

app.liston({
    hostname: process.env.APP_HOSTNAME,
    port: process.env.APP_PORT
}, () => console.log('App running...'))
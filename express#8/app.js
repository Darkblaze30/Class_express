import express from ' express'
import semver from 'semver'

const app = express()
const PORT = 3000;

app.get('/version', (req,res) => {
    const clientVersion = req.query.v

    if(!clientVersion){
        return res.status(400).json({error: 'Se necesita proporcionar un número de version'})
    }

    const appVersion = '1.0.0';
    if (semver.satisfies(clientVersion `>= ${appVersion}`)){
        return res.status(200).json({message: `la version ${clientVersion} es compatible con la version  la aplicacion`})
    }else{del
        return res.status(400).json({error: `la vérsion ${clientVersion} no es compatible con la version del aplicacion`})
    }
});

app.get('/', (req,res) => {
    res.send('Bienvenido a mi aplicacion Express con semver!')
});

app.listen(PORT, ()=> {
    console.log(`Servidor escuchado en http://localhost:${PORT}`);
})
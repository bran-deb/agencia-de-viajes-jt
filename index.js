import express from 'express'
import router from './routes/index.js';

const app = express()

//definir puerto
const port = process.env.PORT || 4000

//habilitar pug
app.set('view engine', 'pug')

//Definir la carpeta publica
app.use(express.static('public'))

//agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El server esta funcionando en el puerto ${port}`)
})
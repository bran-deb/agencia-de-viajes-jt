import express from 'express'
import router from './routes/index.js';

const app = express()

//definir puerto
const port = process.env.PORT || 4000

//agregar router
app.use('/', router)

app.listen(port, () => {
    console.log(`El server esta funcionando en el puerto ${port}`)
})
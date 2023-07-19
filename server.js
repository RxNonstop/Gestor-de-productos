const express = require('express')
const app = express()
const cors = require('cors')

const archivoBD = require('./conexion')

app.use(cors({
    origin: "http://localhost:3000"
}))

app.use(express.json())

const rutaproducto = require('./rutas/productos')
app.use('/api/producto', rutaproducto)

// const bodyParser = require('body-parser')
// app.use(bodyParser.json)
// app.use(bodyParser.urlencoded({extended: 'true'}))

app.get('/',(req,res) =>{
    res.end('Bienvenido al servidor backend Node.js. Corriendo...')
})

//server basico
app.listen(5000, function(){
    console.log('el servidor NODE esta corriendo correctamente')
})
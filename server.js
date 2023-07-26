const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path')


const archivoBD = require('./conexion')

app.use(cors({
    origin: "https://gestorproductos.onrender.com"
}))

app.use(express.json())
app.use(express.static(path.join(__dirname, 'uploads')))


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
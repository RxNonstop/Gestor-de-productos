const mongoose = require('mongoose')
//mongoose.connect('mongodb+srv://douglasdv210:1047471147@gestorproductos.rnn3m.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect('mongodb+srv://aljotana2001:user123@gestorproductos.cgoj9.mongodb.net/?retryWrites=true&w=majority')

const objetobd = mongoose.connection
objetobd.on('connected', ()=>{
    console.log('conexion correcta a MongoDB')
})

objetobd.on('error',()=>{
    console.log('error en la conexion a MongoDB')
})


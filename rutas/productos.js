const express = require('express')
const router = express.Router()

const multer = require('multer')
const sharp = require('sharp')

const path = require('path')
const fs = require('fs')

const mongoose = require('mongoose')
const eschema = mongoose.Schema

const eschemaproducto = new eschema({
    codigo: String,
    categoria: String,
    nombre: String,
    precio: Number,
    descripcion: String,
    file: String
})

const ModeloProducto = mongoose.model('productos', eschemaproducto)

module.exports = router

const storage = multer.diskStorage({

    destination: path.join(__dirname, '../uploads/'),
    filename: (req, file, cb) => {
        if(file){
            const ext = file.originalname.split('.').pop()
            cb(null, `${Date.now()}.${ext}`)
        }
    }
})

const upload = multer({storage})

// const helperImg = (filePath,filename,size = 900) =>{
//     return sharp(filePath)
//         .resize(size)
//         .toFile(`./cliente/public/uploadss/${filename}`)
// }

router.get('/obtenerproductos', async (req,res) =>{

    const productos = await ModeloProducto.find()
    res.send(productos)
})

router.post('/agregarproducto', upload.single('file'),(req,res) =>{

    let filefinal =""

    if(req.final){
        filefinal = req.file.filename
    }

    const nuevoproducto = new ModeloProducto({
        codigo: req.body.codigo,
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file:filefinal
    })

    nuevoproducto.save()

    res.end('Producto agregado exitosamente')
})

router.post('/borrarproducto',async(req,res) =>{

    await ModeloProducto.findOneAndDelete({codigo: req.body.codigo})

    res.end('Producto eliminado exitosamente')
})

router.post('/editarproducto',async(req,res)=>{
    const producto = await ModeloProducto.find({codigo: req.body.codigo})
    res.send(producto)
})

router.post('/actualizarproducto',upload.single('file'),async(req,res) =>{

    let filefinal= req.body.imagen

    if(req.file){
        filefinal = req.file.filename
    }

    await ModeloProducto.findOneAndUpdate({codigo: req.body.codigo},{
        nombre: req.body.nombre,
        categoria: req.body.categoria,
        precio: req.body.precio,
        descripcion: req.body.descripcion,
        file: filefinal
    })
    res.end('Producto actualizado')
})

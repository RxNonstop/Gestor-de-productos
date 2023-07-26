import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import Swal from 'sweetalert2'
import clienteAxios from '../Components/axios/ClienteAxios'
import Header from '../Components/Header'

function EditarProducto(){

    const params = useParams()
    const[codigo, setCodigo] = useState('')
    const[nombre, setNombre] = useState('')
    const[categoria, setCategoria] = useState('')
    const[precio, setPrecio] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[imagen, setImagen] = useState('')
    const[file, setFile] = useState('')

    useEffect(()=>{
        axios.post('hhttps://gestordeproductos.onrender.com/api/producto/editarproducto',{codigo: params.codigo}).then(res =>{
            console.log(res.data[0])
            const dataproducto = res.data[0]
            setCodigo(dataproducto.codigo)
            setNombre(dataproducto.nombre)
            setCategoria(dataproducto.categoria)
            setPrecio(dataproducto.precio)
            setDescripcion(dataproducto.descripcion)
            setImagen(dataproducto.file)
    })
    },[])

    function editarProducto(){
        const actualizarproducto = {
            codigo: params.codigo,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion,
            imagen: imagen,
            file: file
        }

        Swal.fire({
            tittle:'Producto',
            text: 'Producto editado correctamente',
            confirmButtonText: 'Ok'
        })
        .then(response =>{
            clienteAxios.post('https://gestordeproductos.onrender.com/api/producto/actualizarproducto',actualizarproducto)
            .then(res =>{
                window.location = '/listaProductos'
            })
            .then(err =>{
                console.log(err)
            })
        })
    }

    return(
        <>
            <Header></Header>
            <div className="container pt-5 cont-fondo">
                <h3>Editar producto</h3>

                <form className='container mt-5'>
                <div className="mb-3">
                        <label className="form-label">Codigo</label>
                        <input type="number" className="form-control" value={codigo} onChange={(e) => {setCodigo(e.target.value)}} disabled/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input type="text" className="form-control" value={nombre} onChange={(e) => {setNombre(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Categoria</label>
                        <input type="text" className="form-control" value={categoria} onChange={(e) => {setCategoria(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Precio</label>
                        <input type="number" className="form-control" value={precio} onChange={(e) => {setPrecio(e.target.value)}}/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Descripcion</label>
                        <textarea className="form-control" value={descripcion} onChange={(e) => {setDescripcion(e.target.value)}}/>
                    </div>
                    <div className="mb-3 cont-img cont-input-img">
                        <div className="mb-3">
                            <label className="form-label">Imagen</label>
                            <input type="file" className="form-control" onChange={(e) => {setFile(e.target.files[0])}}/>
                        </div>
                        <img src={ imagen ? "https://gestordeproductos.onrender.com"+ imagen : "https://gestordeproductos.onrender.com/imagen_por_defecto.png" } alt='img'></img>
                    </div>
                    <button onClick={editarProducto} type="button" className="btn btn-primary">Editar</button>
                </form>     
            </div>
        </>
    )
}

export default EditarProducto
import axios from 'axios'
import React from 'react'
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom'

function ProductoIndividual({producto}){

    function borrarProducto(codigo){

        axios.post('api/producto/borrarproducto',{codigo})
        
        Swal.fire({
            tittle:'Producto',
            text: 'Producto Eliminado',
            confirmButtonText: 'Ok'
        })
        .then(responde =>{
            window.location = '/listaProductos'
        })

    }

    return(
        <div className='card'>
            <div className='cont-img'>
                <button className='btn-eliminar' onClick={() =>{borrarProducto(producto.codigo)}}>X</button>
                <p>{producto.codigo}</p>
                <img src= {producto.file ? 'uploads/'+producto.file : 'uploads/No_image_available.png'} alt='imagen'></img>
            </div>

            <div className='info'>
                <p className='categoria'>{producto.categoria}</p>
                <p className='nombre'>{producto.nombre}</p>
                <p className='precio'>${producto.precio}</p>
                <p className='descripcion'>{producto.descripcion}</p>
            </div>
            <div className='funciones'>
                <Link to={`/editarproducto/${producto.codigo}`}><li className='btn btn-success'>Editar</li></Link>
            </div>
        </div>
    )
}

export default ProductoIndividual
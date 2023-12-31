import React, {useState} from 'react'
import Swal from 'sweetalert2'
import clienteAxios from '../Components/axios/ClienteAxios'

import Header from '../Components/Header'

function AgregarProducto(){

    const[codigo, setCodigo] = useState('')
    const[nombre, setNombre] = useState('')
    const[categoria, setCategoria] = useState('')
    const[precio, setPrecio] = useState('')
    const[descripcion, setDescripcion] = useState('')
    const[file,setFile] = useState('')


    function AddProducto(){
        let producto = {
            codigo: codigo,
            nombre: nombre,
            categoria: categoria,
            precio: precio,
            descripcion: descripcion,
            file:file
        }

        Swal.fire({
            tittle:'Producto',
            text: 'Producto Agregado',
            confirmButtonText: 'Ok'
        })
        .then(res =>{
            clienteAxios.post('https://gestordeproductos.onrender.com/api/producto/agregarproducto',producto)
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
                <h3>Agregar nuevo producto</h3>

                <form className='container mt-5'>
                <div className="mb-3">
                        <label className="form-label">Codigo</label>
                        <input type="number" className="form-control" value={codigo} onChange={(e) => {setCodigo(e.target.value)}}/>
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
                    <div className="mb-3">
                        <label className="form-label">Imagen</label>
                        <input type="file" className="form-control" onChange={(e) => {setFile(e.target.files[0])}}/>
                    </div>
                    <button onClick={AddProducto} type="button" className="btn btn-primary">Agregar</button>
                </form>     

            </div>
        </>
    )
}

export default AgregarProducto
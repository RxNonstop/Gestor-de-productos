import React, { useEffect, useState } from 'react'

import ProductoIndividual from '../Components/ProductoIndividual'
import axios from 'axios'

import Header from '../Components/Header'

function ListaProductos(){

    const[dataProductos, setDataProductos] = useState([])

    useEffect(() => {
        axios.get('https://gestordeproductos.onrender.com/api/producto/obtenerproductos')
        .then(res =>{
            console.log(res.data)
            setDataProductos(res.data)
        })

    }, [])

    let listaProductos = dataProductos.map(producto => {
        return(
            <ProductoIndividual key={producto._id} producto={producto}/>
        )
    })

    return(
        <>
            <Header></Header>
            <div className='container cont-fondo'>
                <h3 className='pt-4 pb-2'>Lista de productos</h3>

                <div className='cards'>
                    {listaProductos}
                </div>
            </div>
        </>
    )
}

export default ListaProductos
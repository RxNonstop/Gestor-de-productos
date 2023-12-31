import React from 'react'
import { Link } from 'react-router-dom'

function Landing(){
    return(
        <div className='container cont-portada'>
            <div className='borde'>
                <div className='cont-info'>
                    <h2>BIENVENIDO AL GESTOR DE PRODUCTOS</h2>
                    <p>Bienvenido a nuestra pagina para gestionar lo ultimo en productos de tecnologia y gaming, aqui encontraras una lista completa de productos categorizados y con todos sus detalles, precio y descripcion</p>
                </div>
                <div className='cont-lista'>
                    <img src='/images/productos.png' alt='portada'></img>
                    <Link to="/listaproductos"><li>Ingresar</li></Link>
                </div>
            </div>

            {/* <h3 className='mt-5'>Portada de la pagina</h3>
            <img src='producto.jpg' alt='foto'></img> */}
        </div>
    )
}

export default Landing
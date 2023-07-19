import './App.css';

import ListaProductos from './page/ListaProductos';
import AgregarProducto from './page/AgregarProducto';
import EditarProducto from './page/EditarProducto';
import Landing from './page/landing';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg  bg-dark">
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand text-light" href="/"><strong>Gestor de productos</strong></a>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active text-light" aria-current="page" href="/">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/ListaProductos">Lista de productos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="/AgregarProducto">Agregar producto</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing></Landing>} exact></Route>
          <Route path='/listaproductos' element={<ListaProductos></ListaProductos>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>} exact></Route>
          <Route path='/editarproducto/:codigo' element={<EditarProducto></EditarProducto>} exact></Route>
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;

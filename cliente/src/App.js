import './App.css';

import ListaProductos from './page/ListaProductos';
import AgregarProducto from './page/AgregarProducto';
import EditarProducto from './page/EditarProducto';
import Landing from './page/landing';

import {Routes, Route, Router} from 'react-router-dom'

function App() {
  return (

      <Router>
        <Routes>
          <Route path='/' element={<Landing></Landing>} exact></Route>
          <Route path='/listaproductos' element={<ListaProductos></ListaProductos>} exact></Route>
          <Route path='/agregarproducto' element={<AgregarProducto></AgregarProducto>} exact></Route>
          <Route path='/editarproducto/:codigo' element={<EditarProducto></EditarProducto>} exact></Route>
        </Routes>
      </Router>
  );
}

export default App;

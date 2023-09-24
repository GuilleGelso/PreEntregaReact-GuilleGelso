import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer';
import Cart from '../components/Cart';

import {
  BrowserRouter,
  Routes,
  Route

} from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="detalle/:detalleId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
    </BrowserRouter>
  )
}


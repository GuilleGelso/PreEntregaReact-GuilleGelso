import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from '../components/item/NavBar';
import ItemListContainer from '../components/item/ItemListContainer';
import ItemDetailContainer from '../components/item/ItemDetailContainer'

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
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />

      </Routes>
    </BrowserRouter>
  )
}


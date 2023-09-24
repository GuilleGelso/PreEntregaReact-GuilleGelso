
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Router from '../src/router/Router';


import { CartProvider } from './context/CartContext';






function App() {

  
  return (
   <>
   <CartProvider>
        <Router />
      

      </CartProvider>
   
   </>
      


  );
}

export default App;
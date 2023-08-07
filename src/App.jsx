
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './components/item/NavBar';
import ItemListContainer from './containers/itemListContainer';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <ItemListContainer />

      </header>
    </div>

  );
}

export default App;
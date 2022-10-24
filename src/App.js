import './App.css';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './containers/ItemListContainer/ItemListContainer.jsx';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer greeting={"Bienvenido a la primera pre entrega"}/>
    </div>
  );
}

export default App;

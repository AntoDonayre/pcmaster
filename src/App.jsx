import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { cartProvider } from './Context/CartContext';

//Catálogo de productos

function App() {
  return (
    <>
      <BrowserRouter>
        <cartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2>Sitio en construcción</h2>} />
          </Routes>
        </cartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

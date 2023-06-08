import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from './components/Cart/Cart';
import { CarritoProvider } from './context/carritoContext';

//Catálogo de productos

function App() {
  return (
    <>
      <BrowserRouter>
        <CarritoProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:idCategoria' element={<ItemListContainer />} />
            <Route path='/item/:idItem' element={<ItemDetailContainer />} />
            <Route path='*' element={<h2>Sitio en construcción</h2>} />
            <Route path='/cart' element = {<Cart/>} />
          </Routes>
        </CarritoProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

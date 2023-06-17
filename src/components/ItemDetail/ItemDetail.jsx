import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext'
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock, descrip }) => {
  const [agregarCantidad, setAgregarCantidad] = useState(0);
  const { agregarProducto } = useContext(CarritoContext);
  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    const item = { id, nombre, precio };
    agregarProducto(item, cantidad);
  }
  return (
    <div className='contenedorItem'>
      <div className='descripContenedor'>
        <h2>{nombre} </h2>
        <h3>Precio: s/{precio} </h3>
        <h3>ID: {id} </h3>
        <h3>Stock actual: {stock} </h3>
        <p> {descrip} </p>
      </div>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? 
      (<Link to='/cart'> <button className='btnTerminarCompra'>Terminar compra</button> </Link>)
       : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
    </div>
  )
}

export default ItemDetail
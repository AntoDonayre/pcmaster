import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CarritoContext } from '../../context/carritoContext'
import { useContext } from 'react';

const ItemDetail = ({ id, nombre, precio, img, stock }) => {
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
        <h2>Nombre: {nombre} </h2>
        <h3>Precio: s/ {precio} </h3>
        <h3>ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nihil quia, culpa iste quam velit? Ipsum amet, similique illum quam possimus voluptatum, nisi atque modi nemo, corporis minima consequatur maiores! Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut deleniti, veniam in animi deserunt, fugit fuga necessitatibus sapiente totam doloremque mollitia laborum illum sequi non atque, inventore consequatur qui omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi sequi reprehenderit labore eaque quibusdam laboriosam quaerat consequuntur ad? Voluptates accusantium corporis hic unde architecto porro eveniet dolorum commodi qui?</p>
      </div>
      <img src={img} alt={nombre} />
      {agregarCantidad > 0 ? (<Link to='/cart'>Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)}
    </div>
  )
}

export default ItemDetail
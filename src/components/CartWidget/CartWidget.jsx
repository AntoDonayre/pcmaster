import { useContext } from 'react';
import { CarritoContext, carritoContext } from '../../context/carritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);
  const imgCart = "https://cdn-icons-png.flaticon.com/512/116/116356.png";

  return (
    <div>
      <Link to='/cart'>
        <img className='imgCarrito' src={imgCart} alt="Carrito de Compras" />
        {cantidadTotal > 0 && <span> {cantidadTotal} </span>}
      </Link>
    </div>
  )
}

export default CartWidget
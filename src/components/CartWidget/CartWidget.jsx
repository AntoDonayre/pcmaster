import { useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { Link } from 'react-router-dom';
import './CartWidget.css'
import { Icon } from '@iconify/react';

const CartWidget = () => {
  const { cantidadTotal } = useContext(CarritoContext);

  return (
    <div>
      <Link to='/cart'>
        <Icon icon="fluent:cart-16-filled" color="white" className='imgCarrito'/>
        {cantidadTotal > 0 && <span> {cantidadTotal} </span>}
      </Link>
    </div>
  )
}

export default CartWidget
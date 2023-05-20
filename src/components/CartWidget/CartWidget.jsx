import './CartWidget.css'

const CartWidget = () => {
    const imgCart = "https://cdn-icons-png.flaticon.com/512/116/116356.png";
  
    return (
    <div>
        <img className='imgCarrito' src={imgCart} alt="Carrito de Compras" />
        <strong> 2 </strong>
    </div>
  )
}

export default CartWidget
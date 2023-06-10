import { useContext } from "react"
import './CartItem.css'
import { CarritoContext } from "../../context/carritoContext";

const CartItem = ({item, cantidad}) => {
    const {eliminarProducto} = useContext(CarritoContext);
  return (
    <div className="itemProdContainer">
        <h3> {item.nombre} </h3>
        <p>Cantidad: {cantidad} </p>
        <p>Precio: {item.precio} </p>
        <button onClick={()=> eliminarProducto(item.id)} className="btnEliminarProd"> Eliminar </button>
    </div>
  )
}

export default CartItem
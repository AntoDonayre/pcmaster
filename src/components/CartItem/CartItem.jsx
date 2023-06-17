import { useContext, useState } from "react"
import './CartItem.css'
import { Link } from "react-router-dom";
import { CarritoContext } from "../../context/carritoContext";

const CartItem = ({ item, cantidad }) => {
  const { eliminarProducto, vaciarCarrito } = useContext(CarritoContext);
  const [cantidadProducto, setCantidadProducto] = useState(cantidad);
  const [precio, setPrecio] = useState(item.precio * cantidadProducto);

  const aumentarCantidad = () => {
    setCantidadProducto(cantidadProducto + 1);
    setPrecio(item.precio * (cantidadProducto + 1));
  };

  const disminuirCantidad = () => {
    if (cantidadProducto > 1) {
      setCantidadProducto(cantidadProducto - 1);
      setPrecio(item.precio * (cantidadProducto - 1));
    }
  };

  return (
    <div className="itemProdContainer">
      <h3>{item.nombre}</h3>
      <p>Cantidad: {cantidadProducto}
        <button onClick={disminuirCantidad} className="btnqnt"> - </button>
        <button onClick={aumentarCantidad} className="btnqnt"> + </button>
      </p>
      <p>Precio unitario: s/{item.precio}</p>
      <p>Precio total: s/{precio}</p>
      <button onClick={() => eliminarProducto(item.id)} className="btnEliminarProd">Eliminar</button>
      <hr />
    </div>
  )
}

export default CartItem;
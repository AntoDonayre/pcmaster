import { useContext, useState } from "react"
import './CartItem.css'
import { CarritoContext } from "../../context/carritoContext";

const CartItem = ({ producto, actualizarCantidad }) => { // Agregar actualizarCantidad como prop
  const { eliminarProducto } = useContext(CarritoContext);
  const { item, cantidad } = producto;
  const [cantidadProducto, setCantidadProducto] = useState(cantidad);
  const [precio, setPrecio] = useState(item.precio * cantidadProducto);

  const aumentarCantidad = () => {
    setCantidadProducto(cantidadProducto + 1);
    setPrecio(item.precio * (cantidadProducto + 1));
    actualizarCantidad(item.id, cantidadProducto + 1); // Actualizar cantidad en el carrito
  };

  const disminuirCantidad = () => {
    if (cantidadProducto > 1) {
      setCantidadProducto(cantidadProducto - 1);
      setPrecio(item.precio * (cantidadProducto - 1));
      actualizarCantidad(item.id, cantidadProducto - 1); // Actualizar cantidad en el carrito
    }
  };

  return (
    <div className="itemProdContainer">
      <h3>{item.nombre}</h3>
      <p>
        Cantidad: {cantidadProducto}
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

import { CarritoContext } from "../../context/carritoContext"
import './Cart.css'
import { useContext } from "react"
import { Link } from "react-router-dom"
import CartItem from "../CartItem/CartItem"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <div className="carritoVacioCont">
                <h2 className="NoProductos"> No hay productos en el carrito</h2>
                <Link to='/'> <button className="btnVerProductos">Ver Productos</button> </Link>
            </div>
        )
    }
    return (
        <>
            <h2>Verifica tu orden</h2>
            <div className="carritoVisual">
                <div className="firstBodyConfirm">
                    {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
                </div>
                <div className="secondBodyConfirm">
                    <h4 className="total">Total: s/{total} </h4>
                    <h4 className="cantidadTotal">Número de productos: {cantidadTotal} </h4>
                    <button onClick={() => vaciarCarrito()} className="btnVaciaryFin"> Vaciar carrito </button>
                    <Link to='/checkout'> <button className="btnVaciaryFin">Finalizar Compra</button> </Link>
                </div>
            </div>
        </>
    )
}

export default Cart;
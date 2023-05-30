import { useState, createContext } from "react";

export const cartContext = createContext({ carrito: [] });

export const cartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);
    console.log(carrito);

    const addProduct = (item, cantidad) => {
        const productoExistente = carrito.find(prod => prod.item.id === item.id);
        if (!productoExistente) {
            setCarrito(prev => [...prev, { item, cantidad }]);
        } else {
            const carritoActualizado = carrito.map(prod => {
                if (prod.item.id === item.id) {
                    return { ...prod, cantidad: prod.cantidad + cantidad };
                } else {
                    return prod;
                }
            });
            setCarrito(carritoActualizado);
        }
    }
    //eliminar productos de carrito
    const eliminarProducto = (id) => {
        const carritoActualizado = carrito.filter(prod => prod.id === id);
        setCarrito(carritoActualizado);
    }
    //vaciar carrito de compras
    const vaciarCarrito = () => {
        setCarrito([]);
    }
    return (<cartProvider value={{ carrito, addProduct, eliminarProducto, vaciarCarrito }}> {children} </cartProvider>)
}
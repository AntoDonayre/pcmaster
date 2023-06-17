import React, { useState, createContext } from "react";

export const CarritoContext = createContext({
  carrito: [],
  total: 0,
  cantidadTotal: 0,
  actualizarCantidad: () => {},
});

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [cantidadTotal, setCantidadTotal] = useState(0);

  const agregarProducto = (item, cantidad) => {
    const productoExistente = carrito.find((prod) => prod.item.id === item.id);

    if (!productoExistente) {
      setCarrito((prev) => [...prev, { item, cantidad }]);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    } else {
      const carritoActualizado = carrito.map((prod) => {
        if (prod.item.id === item.id) {
          return { ...prod, cantidad: prod.cantidad + cantidad };
        } else {
          return prod;
        }
      });
      setCarrito(carritoActualizado);
      setCantidadTotal((prev) => prev + cantidad);
      setTotal((prev) => prev + item.precio * cantidad);
    }
  };

  const eliminarProducto = (id) => {
    const productoEliminado = carrito.find((prod) => prod.item.id === id);
    const carritoActualizado = carrito.filter((prod) => prod.item.id !== id);
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev - productoEliminado.cantidad);
    setTotal((prev) => prev - productoEliminado.item.precio * productoEliminado.cantidad);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setCantidadTotal(0);
    setTotal(0);
  };

  const actualizarCantidad = (id, cantidad) => {
    const carritoActualizado = carrito.map((prod) => {
      if (prod.item.id === id) {
        return { ...prod, cantidad: cantidad };
      } else {
        return prod;
      }
    });
    setCarrito(carritoActualizado);
    setCantidadTotal((prev) => prev + (cantidad - carritoActualizado.find((prod) => prod.item.id === id).cantidad));
    setTotal((prev) => prev + (cantidad - carritoActualizado.find((prod) => prod.item.id === id).cantidad) * carritoActualizado.find((prod) => prod.item.id === id).item.precio);
  };

  return (
    <CarritoContext.Provider
      value={{ carrito, agregarProducto, eliminarProducto, vaciarCarrito, total, cantidadTotal, actualizarCantidad }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

import React from 'react'
import { useState, useEffect } from 'react';
import { collection, query, getDocs, where, doc, updateDoc } from "firebase/firestore";
import { db } from "../../Service/Config"
import './Productos.css';

const Productos = () => {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        //const misProductos = query(collection(db, "productos"), where("precio", ">", 0));
        const misProductos = query(collection(db, "productos"));
        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, [Productos])
    const descontarStock = async (producto) => {
        const productoRef = doc(db, "productos", producto.id);
        let nuevoStock = producto.stock - 1;
        await updateDoc(productoRef, { stock: nuevoStock });
    }
    return (
        <>
            <h2>Mis productos</h2>
            <div className='productos-container'>
                {
                    Productos.map((producto) => (
                        <div className='producto-card' key={producto.id}>
                            <h2>{producto.nombre}</h2>
                            <p>Precio: s/ {producto.precio}</p>
                            <p>Stock:{producto.stock}</p>
                            <button onClick={() => descontarStock(producto)}>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Productos
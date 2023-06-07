import React from 'react'
import { useState, useEffect } from 'react';
import { collection, query, getDocs, where } from "firebase/firestore";
import { db } from "../../Service/Config"
import './Productos.css';

const Productos = () => {
    const [Productos, setProductos] = useState([]);
    useEffect(() => {
        const misProductos = query(collection(db, "productos"));
        getDocs(misProductos)
            .then(respuesta => {
                setProductos(respuesta.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            })
    }, [Productos])
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
                            <button>Comprar</button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Productos
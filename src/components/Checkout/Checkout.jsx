import React from 'react'
import { useState, useContext } from 'react';
import { CarritoContext } from '../../context/carritoContext';
import { db } from "../../Service/Config";
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore';
import './Checkout.css';

const Checkout = () => {
    const { carrito, vaciarCarrito, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");
    const [email, setEmail] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const manejadorFormulario = (event) => {
        event.preventDefault();
        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Por favor no deje campos vacíos");
            return;
        }
        if (email !== emailConfirmacion) {
            setError("Los correos no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad
            })),
            total: carrito.reduce((total, producto) => total + producto.item.precio * producto.cantidad, 0),
            nombre,
            apellido,
            telefono,
            email,
            fecha: new Date()
        };
        Promise.all(
            orden.items.map(async (productoOrden) => {
                const productoRef = doc(db, "productos", productoOrden.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                await updateDoc(productoRef, {
                    stock: stockActual - productoOrden.cantidad,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.error("Error al crear orden", error);
                        setError("Se produjo un error al crear la orden");
                    })
            })
            .catch(((error) => {
                console.error("Error para actualizar el stock", error);
                setError("Se produjo un error al actualizar el stock de productos");
            }))
    }
    return (
        <div className='formConfirm'>
            <h2>Confirma tu compra</h2>
            <form onSubmit={manejadorFormulario}>
                {carrito.map(producto => (
                    <div key={producto.item.id}>
                        <p>{producto.item.nombre} x {producto.cantidad}</p>
                        <p>Precio: s/ {producto.item.precio*producto.cantidad}</p>
                        <hr />
                    </div>
                ))}
                <p> Total: <strong>s/{total}</strong></p>
                <hr />
                <div className='clientData'>
                    <div>
                        <label htmlFor="">Nombre</label>
                        <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Apellido</label>
                        <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Teléfono</label>
                        <input type="number" value={telefono} onChange={(e) => setTelefono(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="">Email confirmación</label>
                        <input type="email" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                    <button type="submit"> Finalizar compra </button>
                </div>
            </form>
            {ordenId && (<p className='compraRealizada'> ¡Gracias por tu compra!, tu código de orden es <strong> {ordenId} </strong> </p>)}
        </div>
    )
}

export default Checkout
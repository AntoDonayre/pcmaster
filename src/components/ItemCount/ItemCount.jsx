import React from 'react'
import { useState } from 'react'
import './ItemCount.css'
//recordar que se debe desestructurar las props, como se agrega una funcion js siempre debe tener ({}) este formato.
const ItemCount = ({inicial, stock, funcionAgregar}) => {

    const [contador, setContador] = useState(inicial);

    const incrementar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if (contador > inicial) {
            setContador(contador - 1);
        }
    }

    return (
        <>
            <div className='contadorContainer'>
                <button className='btnContador' onClick={decrementar}> - </button>
                <p> {contador} </p>
                <button className='btnContador' onClick={incrementar}> + </button>
            </div>
            <button className='btnAgregar' onClick={()=>funcionAgregar(contador)}>Agregar al carrito</button>
        </>
    )
}

export default ItemCount
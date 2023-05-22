import React from 'react'
import { useState } from 'react'
import './ItemCount.css'

const ItemCount = () => {
    const [contador, setContador] = useState(1);
    
    let maximoStock = 10; 

    const incrementar = () => {
        if(contador < maximoStock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > 1){
            setContador(contador - 1);
        }
    }

  return (
    <div className='contadorContainer'>
        <button className='btnContador' onClick={ decrementar }> - </button>
        <p> {contador} </p>
        <button className='btnContador' onClick={ incrementar }> + </button>
    </div>
  )
}

export default ItemCount
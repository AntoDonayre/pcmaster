import React from 'react'
import { useState } from 'react'

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
    <div>
        <button onClick={ decrementar }> - </button>
        <p> {contador} </p>
        <button onClick={ incrementar }> + </button>
    </div>
  )
}

export default ItemCount
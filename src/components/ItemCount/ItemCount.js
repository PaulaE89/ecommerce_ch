import './ItemCount.css'
import React, { useState } from 'react'



export const ItemCount = ({  stock ,onAdd, counter, setCounter}) => {
    // const [counter, setCounter] = useState(value);
    const [disable, setDisable] = useState(false);

    const addition = () => {
        if (counter ===stock) {
            setDisable(true)
            alert(`there is only ${stock} in stock`)
        } else {
            setCounter((c) => c + 1);
        }
    }

    const subtraccion = () => {
        if (counter === 0) {
            alert('It is zero')
        } else if (counter === stock) {
            setDisable(false)
            setCounter((c) => c - 1)
        } else {
            setCounter((c) => c - 1)
        }
    }

       
    

    return (
        <div className='btn_add_items'>
            <div className='btn_add_buy'>
              
                <div className='btn_add_sub'>
                    <button onClick={subtraccion} className='btn_sign'>-</button>
                    <input value={counter}  className='value_buy' ></input>
                    <button onClick={addition} disabled={disable} className='btn_sign'>+</button>
                </div>
                <div className='buy_btn'>
               <button className='add_cart' onClick={onAdd} value={counter}>ADD TO CART</button> 
                </div>
            </div>
        </div>
    )
}
import './ItemCount.css'
import React, { useState } from 'react'



export const ItemCount = ({ value, stock ,onAdd,subtraccion,counter,disable,buyNow}) => {
    // const [counter, setCounter] = useState(value);
    // const [disable, setDisable] = useState(false);

    // const onAdd = () => {
    //     if (counter === 10) {
    //         setDisable(true)
    //         alert(`there is only ${stock} in stock`)
    //     } else {
    //         setCounter((c) => c + 1);
    //     }
    // }

    // const subtraccion = () => {
    //     if (counter === 0) {
    //         alert('It is zero')
    //     } else if (counter === 10) {
    //         setDisable(false)
    //         setCounter((c) => c - 1)
    //     } else {
    //         setCounter((c) => c - 1)
    //     }
    // }

       
    const handleChange = (e) => {
        console.log('handle change called')
    }



    return (
        <div className='btn_add_items'>
            <div className='btn_add_buy'>
              
                <div className='btn_add_sub'>
                    <button onClick={subtraccion} className='btn_sign'>-</button>
                    <input value={counter} onChange={(e) => { handleChange(e) }} className='value_buy' ></input>
                    <button onClick={onAdd} disabled={disable} className='btn_sign'>+</button>
                </div>
                <div className='buy_btn'>
               <button className='add_cart' onClick={buyNow}>ADD TO CART</button> 
                </div>
            </div>
        </div>
    )
}
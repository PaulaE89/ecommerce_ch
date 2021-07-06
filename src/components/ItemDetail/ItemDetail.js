import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



export const ItemDetail = (itemDetail) => {


    let value = 0;
    let stock = '10'
    
    const [counter, setCounter] = useState(value);
    const [disable, setDisable] = useState(false);

    const onAdd = () => {
        if (counter === 10) {
            setDisable(true)
            alert(`there is only ${stock} in stock`)
        } else {
            setCounter((c) => c + 1);
        }
    }

    const subtraccion = () => {
        if (counter === 0) {
            alert('It is zero')
        } else if (counter === 10) {
            setDisable(false)
            setCounter((c) => c - 1)
        } else {
            setCounter((c) => c - 1)
        }
    }


    //---------------

    const buyNow = () => {
      
        if (counter === 0) {
            alert('you have to choose more than zero element')

        } else {
            let btndesaparecer = document.getElementsByClassName('btn_add_items')[0]
            btndesaparecer.style.display = 'none';
            let dis = document.getElementsByClassName('btn_confirm')[0]
            dis.style.display = 'block'

        }
    }


    return (
        <div className='itemDetail'>
            <div className='pictureDetail'>
                <img src={itemDetail.itemDetail[0].picture} ></img>
            </div>
            <div className='informationDetail'>
                <div className='titleDetail'>{itemDetail.itemDetail[0].title}</div>
                <div className='sizeDetail'>Size : {itemDetail.itemDetail[0].size}</div>
                <div className='descriptionDetail'> Description :  {itemDetail.itemDetail[0].description} </div>
                <div className='priceDetail'>${itemDetail.itemDetail[0].price}</div>
                <ItemCount value={value} stock={stock} onAdd={onAdd} subtraccion={subtraccion} counter={counter} disable={disable} buyNow={buyNow} />

                <NavLink to='/cart' className='btn_confirm' counter={counter}><button className='btn_buy_now'>BUY NOW</button></NavLink>


                {console.log('vauee', counter)}
            </div>

        </div>
    )

}
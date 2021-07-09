import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'



export const ItemDetail = (itemDetail) => {

    let value = 0
    let stock = '10'
    let totalValue


    const [counter, setCounter] = useState(value);



    const onAdd = () => {


        if (counter === 0) {
            alert('you have to choose more than zero element')
        } else {



            let btndesaparecer = document.getElementsByClassName('btn_add_items')[0]
            btndesaparecer.style.display = 'none';
            let dis = document.getElementsByClassName('btn_buy_now')[0]
            dis.style.display = 'block'

        }
    }


    const prueba = () => {


        console.log('totalValue', totalValue)
    }

    console.log()


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
                <NavLink to='/cart' className='btn_buy_now' onClick={prueba} >BUY NOW</NavLink>
                <ItemCount value={value} stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter} />







            </div>
        </div>
    )

}
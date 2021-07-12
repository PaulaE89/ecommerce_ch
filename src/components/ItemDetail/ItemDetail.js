import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../context/CartContext'



export const ItemDetail = ({itemDetail}) => {

  
    const {addItem}=useCartContext();

    // console.log('usecartcontext',useCartContext())

    let value = 0
    let stock = '10'
    let totalValue


    const [counter, setCounter] = useState(value);
    const [hide, setHide] = useState(false)



    const onAdd = () => {
        if (counter === 0) {
            alert('you have to choose more than zero element')
        } else {

            setHide(true)

        }
    }






    return (
        <div className='itemDetail'>
            <div className='pictureDetail'>
                <img src={itemDetail[0].picture} ></img>
            </div>
            <div className='informationDetail'>
                <div className='titleDetail'>{itemDetail[0].title}</div>
                <div className='sizeDetail'>Size : {itemDetail[0].size}</div>
                <div className='descriptionDetail'> Description :  {itemDetail[0].description} </div>
                <div className='priceDetail'>${itemDetail[0].price}</div>
                {hide ? (<NavLink to='/cart' className='btn_buy_now' onClick={()=>addItem(itemDetail[0],counter)}>BUY NOW</NavLink>) :
                    (<ItemCount value={value} stock={stock} onAdd={onAdd} counter={counter} setCounter={setCounter} />)}







            </div>
        </div>
    )

}
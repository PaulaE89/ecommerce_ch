import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';



export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(undefined);
    const pruebaDetail = {

        'picture': 'https://picsum.photos/200/300',
        'title': 'T-shirt',
        'description': 'Solids: 100% Cotton; Heathers: 60% Cotton, 40% Polyester ,Imported,Smooth and comfortable lightweight jersey fabric',
        'price': '123',
        'size': 'M'
    }

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(pruebaDetail) }, 2000)
    })

    useEffect(() => {
        getItems.then(elemento => {
            setItemDetail(elemento)
        }).catch(err => {
            console.log('err :', err)
        })
    }, [])


    return (
        <div className='itemDetailContainer'>
            {itemDetail ? (<ItemDetail itemDetail={itemDetail}></ItemDetail>) : (<p className='loadItems'>LOADING PAGE ...</p>)}
        </div>
    )

}
import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';



export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(undefined);

    let { id } = useParams()
    id = parseInt(id)


    const pruebaDetail = [{
        'id': 1,
        'picture': 'https://picsum.photos/200/300',
        'title': 'T-shirt',
        'description': 'Solids: 100% Cotton; Heathers: 60% Cotton, 40% Polyester ,Imported,Smooth and comfortable lightweight jersey fabric',
        'price': '123',
        'size': 'M'
    },
    {
        'id': 2,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Trousers',
        'description': 'Solids: 100% Cotton; Heathers: 60% Cotton, 40% Polyester ,Imported,Smooth and comfortable lightweight jersey fabric',
        'price': '123',
        'size': 'M'





    },
    {
        'id': 3,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Shoes',
        'description': 'Solids: 100% Cotton; Heathers: 60% Cotton, 40% Polyester ,Imported,Smooth and comfortable lightweight jersey fabric',
        'price': '123',
        'size': 'M'
    },
    {

        'id': 4,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Belt',
        'description': 'Solids: 100% Cotton; Heathers: 60% Cotton, 40% Polyester ,Imported,Smooth and comfortable lightweight jersey fabric',
        'price': '123',
        'size': 'M'
    }]

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(itemDetail) }, 2000)
    })

    useEffect(() => {
        getItems.then(elemento => {

            setItemDetail(pruebaDetail.filter((elem) => elem.id == id))

        }).catch(err => {
            console.log('err :', err)
        })
    }, [id])



    return (
        <div className='itemDetailContainer'>

            {itemDetail ? (<ItemDetail itemDetail={itemDetail}></ItemDetail>) : (<p className='loadItems'>LOADING PAGE ...</p>)}
        </div>
    )

}
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
        'size': 'S'
    },
    {
        'id': 2,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Trousers',
        'description': 'A flat-front dressy chino that offers classic style all week long; made to be wrinkle-resistant and easy-care with a traditional relaxed look and fit',
        'price': '456',
        'size': 'M'

    },
    {
        'id': 3,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Shoes',
        'description': 'Casual, slip-on styling with padded collar and concealed gore for accommodating fit',
        'price': '789',
        'size': 'L'
    },
    {

        'id': 4,
        'picture': 'https://picsum.photos/200/300',
        'title': 'Belt',
        'description': 'Genuine Leather,New Design for Exact Fit,Width 1 3/8"',
        'price': '753',
        'size': 'XL'
    }]

    const getItems = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(itemDetail) }, 2000)
    })

    useEffect(() => {
        getItems.then(elemento => {

            setItemDetail(pruebaDetail.filter((elem) => elem.id === id))

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
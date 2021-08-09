import './ItemDetailContainer.css';
import React, { useEffect, useState } from 'react';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../Firebase/firebase'



export const ItemDetailContainer = () => {

    const [itemDetail, setItemDetail] = useState(undefined);
    const [IsLoading, setLoading] = useState(false);
    let { id } = useParams()

   
    useEffect(() => {

        const db = dataBase;
        const itemCollection = db.collection('products_hammy');
        itemCollection.get().then((doc) => {
            if (!doc.size === 0) {
                console.log('item does not exist ')
            }

            let data = doc.docs.map(doc => doc.data())
            setItemDetail(data.filter(elem => elem.id === id))

        }).catch((error) => {
            console.log('error', error)
        }).finally(() => {
            setLoading(false)
        })


    }, [id])

    return (
        <div className='itemDetailContainer'>
            {itemDetail ? (<ItemDetail itemDetail={itemDetail}></ItemDetail>) : (<p className='loadItems'>LOADING PAGE ...</p>)}
        </div>
    )

}
import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { dataBase } from '../../Firebase/firebase'

export const ItemListContainer = (props) => {

    const [items, setItem] = useState(undefined);
    const { categoryId } = useParams()
    const [IsLoading, setLoading] = useState(false);
  
    useEffect(() => {
        setLoading(true);
        const db = dataBase;
        const itemCollection = db.collection('products_hammy');
        itemCollection.get().then((response) => {
            if (response.size === 0) {
                console.log('No results')
            } else if (categoryId === undefined) {
                setItem(response.docs.map(doc => doc.data()));
            } else {
               let data= itemCollection.where('category','==',categoryId)
               orderFunction(data)
                // let data = response.docs.map(doc => doc.data());
                // console.log('data', data)
                // setItem(data.filter((elem) => elem.category === categoryId))
                // setLoading(false);
            }

        }).catch((error) => {
            console.log('error :', error)
        }).finally(() => {
            setLoading(false);
        })
    }, [categoryId])


    const orderFunction=(data)=>{
            data
        .get()
        .then((result)=>{
            if(result===0){
                console.log('no resultados en filter')
            }
            setItem(result.docs.map(doc => ({ ...doc.data(), id: doc.id })))
                 setLoading(false);
        }).catch((err)=>console.log(err))
        .finally(() => {});
    }

    return (
        <div>
            <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1>

            {items ? (<ItemList items={items} />) : (<p className='loadItems'>LOADING PAGE ...</p>)}

        </div>
    )
}
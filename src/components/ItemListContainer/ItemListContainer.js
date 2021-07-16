import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

import { dataBase } from '../../Firebase/firebase'

//import {getFirestore} from '../../Firebase/firebase'

export const ItemListContainer = (props) => {


    const [items, setItem] = useState(undefined);
    const { categoryId } = useParams()

    const [IsLoading, setLoading] = useState(false);

    // const itemsPrueba = [{
    //     'id': 1,
    //     'title': 'T-shirt',
    //     'price': '123',
    //     'pictureUrl': 'https://picsum.photos/200/300',
    //     'category': 'category1'


    // },
    // {
    //     'id': 2,
    //     'title': 'Trousers',
    //     'price': '456',
    //     'pictureUrl': 'https://picsum.photos/id/237/200/300',
    //     'category': 'category2'
    // },
    // {
    //     'id': 3,
    //     'title': 'Shoes',
    //     'price': '789',
    //     'pictureUrl': 'https://picsum.photos/200/300',
    //     'category': 'category3'
    // },

    // {
    //     'id': 4,
    //     'title': 'Belt',
    //     'price': '753',
    //     'pictureUrl': 'https://picsum.photos/id/237/200/300',
    //     'category': 'category1'
    // }]


    // const response = new Promise((resolve, reject) => {

    //     setTimeout(() => { resolve(itemsPrueba) }, 2000)

    // })

    // useEffect(() => {
    //     response.then(elemento => {

    //         if (categoryId === undefined) {

    //             setItem(elemento);
    //         } else {

    //             setItem(itemsPrueba.filter((elem) => elem.category === categoryId))
    //         }

    //     }).catch(err => {
    //         console.log('err :', err)
    //     })
    // }, [categoryId])


    useEffect(() => {

        setLoading(true);
        const db = dataBase;

        console.log('db', db)
        const itemCollection = db.collection('products_hammy');

        itemCollection.get().then((querySnapshot) => {

            if (querySnapshot.size === 0) {

                console.log('No results')
            }
            setItem(querySnapshot.docs.map(doc => doc.data()));

        }).catch((error) => {

            console.log('error :', error)
        }).finally(() => {

            setLoading(false);
        })


    }, [])



    //--------//


    useEffect(() => {

        const db = dataBase;

        const itemCollection = db.collection('products_hammy');
        const item = itemCollection.doc('')

        item.get().then((doc) => {


            if (!doc.exists) {

                console.log('item does not exist ')
                return

            }

            console.log('item found ')
            setItem({id: doc.id, ...doc.data()})
        }).catch((error)=>{

            console.log('error',error)
        }).finally(()=>{
            setLoading(false)
        })


    },[])


    //--------//


    return (
        <div>
            <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1>

            {items ? (<ItemList items={items} />) : (<p className='loadItems'>LOADING PAGE ...</p>)}

        </div>
    )
}
import './ItemListContainer.css'
import { ItemCount } from '../ItemCount/ItemCount'
import React, { useEffect, useState } from 'react'


import { ItemList } from '../ItemList/ItemList'

import {ItemDetailContainer} from '../ItemDetailContainer/ItemDetailContainer'

export const ItemListContainer = (props) => {


    const [items, setItem] = useState(undefined);
    const itemsPrueba = [{
        'id': 1,
        'title': 'T-shirt',
        'price': '123',
        'pictureUrl': 'wwww.hammy.com'


    },
    {
        'id': 2,
        'title': 'Trousers',
        'price': '456',
        'pictureUrl': 'wwww.hammyonbeach.com'
    },
    {
        'id': 3,
        'title': 'Shoes',
        'price': '789',
        'pictureUrl': 'www.hammyHouse.com'
    },

    {
        'id': 4,
        'title': 'Belt',
        'price': '753',
        'pictureUrl': 'www.hammyclass.com'
    }]


    const response = new Promise((resolve, reject) => {
        setTimeout(() => { resolve(itemsPrueba) }, 2000)

    })

    useEffect(() => {
        response.then(elemento => {
            setItem(elemento);
        }).catch(err => {
            console.log('err :', err)
        })
    }, [])

    return (

        <div>
            <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1>
            <ItemCount value={0} stock='10' />
            {items ? (<ItemList items={items} />) : (<p className='loadItems'>LOADING PAGE ...</p>)}
            <ItemDetailContainer/>
        </div>
    )
}
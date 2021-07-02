import './ItemListContainer.css'
import React, { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'


export const ItemListContainer = (props) => {


    const [items, setItem] = useState(undefined);
    const { categoryId } = useParams()

    const itemsPrueba = [{
        'id': 1,
        'title': 'T-shirt',
        'price': '123',
        'pictureUrl': 'https://picsum.photos/200/300',
        'category': 'category1'


    },
    {
        'id': 2,
        'title': 'Trousers',
        'price': '456',
        'pictureUrl': 'https://picsum.photos/id/237/200/300',
        'category': 'category2'
    },
    {
        'id': 3,
        'title': 'Shoes',
        'price': '789',
        'pictureUrl': 'https://picsum.photos/200/300',
        'category': 'category3'
    },

    {
        'id': 4,
        'title': 'Belt',
        'price': '753',
        'pictureUrl': 'https://picsum.photos/id/237/200/300',
        'category': 'category1'
    }]


    const response = new Promise((resolve, reject) => {
        
        setTimeout(() => { resolve(itemsPrueba) }, 2000)

    })

    useEffect(() => {
        response.then(elemento => {

            if (categoryId === undefined) {

                setItem(elemento);
            } else {
             
                setItem(itemsPrueba.filter((elem) => elem.category === categoryId))
            }

        }).catch(err => {
            console.log('err :', err)
        })
    }, [categoryId])



    return (
        <div>
            <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1>
     
            {items ? (<ItemList items={items} />) : (<p className='loadItems'>LOADING PAGE ...</p>)}
           
        </div>
    )
}
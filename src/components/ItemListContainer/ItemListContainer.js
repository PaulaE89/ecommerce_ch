import './ItemListContainer.css'
import {ItemCount}from '../ItemCount/ItemCount'
export const ItemListContainer=(props)=>{


    return(

        <div>
           <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1> 
           <ItemCount value={0} stock='10'></ItemCount>
        </div>
    )
}
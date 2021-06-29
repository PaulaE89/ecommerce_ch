import './ItemList.css'

import {Item} from '../Item/Item'

export const ItemList =({items})=>{

    return(
        <div className='wrapper_products'> 
            {items.map((elem)=>{
                return <Item key={elem.id} item ={elem}/>  

            })}
        </div>
    )
}
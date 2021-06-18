import './ItemListContainer.css'

export const ItemListContainer=(props)=>{


    return(

        <div>
           <h1 className='list_items'>HELLO {props.greeting} ¡¡ </h1> 
        </div>
    )
}
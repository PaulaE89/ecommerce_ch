import { createContext, useContext, useState } from 'react'


export const CartContext=createContext();

// export const handleCartContext =()=> useContext(CartContext)

const CartContext=({children})=>{

    [itemCart, setItemCart]=useState({

        item:{},
        quantity:0
    })
    
    const addItem=(item, quantity)=>{

        console.log('item', item);
        console.log('quantity', quantity);
        
    }

    const removeItem=()=>{}

    const clear=()=>{}


    const IsInCart=()=>{}





    return(

        <CartContext.Provider value={addItem}  >{children}</CartContext.Provider>
    )
}




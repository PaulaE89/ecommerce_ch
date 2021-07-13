import { createContext, useContext, useState } from 'react'


export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [itemCart, setItemCart] = useState([])
    const [cartQuantity, setCartQuantity]=useState(0)
    const [price, setPrice]=useState(0)

    const IsInCart = (id) => {

        return itemCart.find(product => product.id === id

        )

    }


    const addItem = (product, counter) => {
        product.counter = counter;
    
        let existCart = IsInCart(product.id)

        if (existCart) {
            // console.log('the items are equals ')
            // console.log('itemcart', itemCart)
            existCart.counter += counter
            setItemCart([...itemCart])

        } else {

            // console.log('the items are not  equals')
            setItemCart([...itemCart, { ...product }])
            // console.log('itemcart', itemCart)
        }


        setCartQuantity(cartQuantity+1)
        
        setPrice(parseInt(price)+parseInt( product.price))



    }



    const removeItem = (itemId) => {
   
        setItemCart(itemCart.filter(elem => elem.id !== itemId))
        setCartQuantity(cartQuantity-1)
        //setPrice(price- product.price)

    }

    const deleteAllProducts = () => {

        setItemCart([])
    }


    return (

        <CartContext.Provider value={{ addItem, itemCart, removeItem, deleteAllProducts,cartQuantity,price }}  >
            {children}</CartContext.Provider>
    )
}


export default CartContextProvider

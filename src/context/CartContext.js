import { createContext, useContext, useState } from 'react'


export const CartContext = createContext();

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({ children }) => {

    const [itemCart, setItemCart] = useState([])
    const [cartQuantity, setCartQuantity] = useState(0)
    const [priceTotal, setPriceTotal] = useState(0)

    const IsInCart = (id) => {

        return itemCart.find(product => product.id === id

        )

    }


    const addItem = (product, counter) => {
        product.counter = counter;

        let existCart = IsInCart(product.id)

        if (existCart) {



            setItemCart(itemCart.map((elem) => elem.id === product.id ? { ...elem, counter: elem.counter + 1 } : elem));
            // existCart.counter += counter

            // setItemCart([...itemCart])

        } else {


            setItemCart([...itemCart, { ...product }])

        }


        setCartQuantity(cartQuantity + 1)

        console.log('pricetotal', priceTotal)

        console.log('this is product', product)




        setPriceTotal(parseInt(priceTotal) + parseInt(product.price))



    }



    const removeItem = (itemId) => {

        setItemCart(itemCart.filter(elem => elem.id !== itemId))
        setCartQuantity(cartQuantity - 1)
        //setPrice(price- product.price)

    }

    const deleteAllProducts = () => {

        setItemCart([])
        setPriceTotal(0)
        setCartQuantity(0)

    }


    return (

        <CartContext.Provider value={{ addItem, itemCart, removeItem, deleteAllProducts, cartQuantity, priceTotal }}  >
            {children}</CartContext.Provider>
    )
}


export default CartContextProvider

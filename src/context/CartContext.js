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
            existCart.counter += counter
            setItemCart([...itemCart])

        } else {
            setItemCart([...itemCart, { ...product }])

        }

        setCartQuantity(cartQuantity + counter)
        setPriceTotal(parseInt(priceTotal) + (parseInt(product.price) * counter))

    }



    const removeItem = (product) => {

        if (product.counter > 1) {
            setItemCart(itemCart.map(elem => elem.id === product.id ? { ...elem, counter: elem.counter - 1 } : elem))

        } else {

            setItemCart(itemCart.filter(elem => elem.id !== product.id))
        }
        setCartQuantity(cartQuantity - 1)

        setPriceTotal(priceTotal - product.price)

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

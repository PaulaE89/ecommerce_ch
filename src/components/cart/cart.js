import { useCartContext } from '../../context/CartContext'



export const Cart = () => {

    const { itemCart, removeItem, deleteAllProducts ,cartQuantity,price} = useCartContext();

    console.log('cartQuantity',itemCart)

    console.log('price',price)


    return (
        <div>
            {itemCart.map((elem) =>
                <div>    <p>{elem.title}</p> <p>x {elem.counter}</p><p> = {elem.price}</p> <button onClick={() => removeItem(elem.id)}>Delete</button> </div>

            )}

            <p>price total: {price}</p>
            <button onClick={() => deleteAllProducts()}>Delete ALL</button>
        </div>
    )
}
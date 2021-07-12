import { useCartContext } from '../../context/CartContext'



export const Cart = () => {

    const { itemCart, removeItem, deleteAllProducts } = useCartContext();



    return (
        <div>
            {itemCart.map((elem) =>
                <div>    <p>{elem.title}</p> <button onClick={() => removeItem(elem.id)}>Delete</button> </div>

            )}
            <button onClick={() => deleteAllProducts()}>Delete ALL</button>
        </div>
    )
}
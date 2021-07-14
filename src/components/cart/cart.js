import { useCartContext } from '../../context/CartContext'
import { EachCart } from '../EachCart/EachCart'



export const Cart = () => {

    const { itemCart, removeItem, deleteAllProducts, cartQuantity, priceTotal } = useCartContext();

    console.log('price total',priceTotal)

   


    return (
        <div>
            {itemCart.map((elem) => {
                return <EachCart key={elem.id} product={elem} />
            })}

            <p>price total: {priceTotal}</p>
            <button onClick={() => deleteAllProducts()}>Delete ALL</button>
        </div>
    )
}
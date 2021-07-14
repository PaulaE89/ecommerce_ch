
import { useCartContext } from '../../context/CartContext'

export const EachCart = ({ product }) => {

    console.log('product in each cart', product)
    const { removeItem } = useCartContext();
    const { title, counter, id, price } = product

    return (

        <div>
            <div>    <p>{title}x {counter}= $  {price * counter}</p>
                <button onClick={() => removeItem(id)}>Delete</button> </div>
        </div>
    )
}
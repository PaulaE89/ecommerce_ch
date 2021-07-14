
import { useCartContext } from '../../context/CartContext'
import './EachCart.css'

export const EachCart = ({ product }) => {

    console.log('product in each cart', product)
    const { removeItem } = useCartContext();   
    const { title, counter, id, price } = product

    return (

        <div className='eachProductContent'>
            <div className='eachProduct'>   <p>{title} x {counter}= $  {price * counter}</p></div>
               <div className='btnDeleteProduct'> <button  onClick={() => removeItem(product)}>-</button> </div>
        </div>
    )
}
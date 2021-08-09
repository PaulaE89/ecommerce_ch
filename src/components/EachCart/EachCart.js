
import { useCartContext } from '../../context/CartContext'
import './EachCart.css'

export const EachCart = ({ product }) => {

     const { removeItem } = useCartContext();   
    const { title, counter,  price } = product

    return (

        <div className='eachProductContent'>
            <div className='eachProduct'>   <p>{title} x {counter}= $  {price * counter}</p></div>
               <div className='btnDeleteProduct'> <button className='btnRemoveItem' onClick={() => removeItem(product)}>-</button> </div>
        </div>
    )
}
import { useCartContext } from '../../context/CartContext'
import { EachCart } from '../EachCart/EachCart'
import { NavLink } from 'react-router-dom'
import './cart.css'




export const Cart = () => {

    const { itemCart, deleteAllProducts, cartQuantity, priceTotal } = useCartContext();

    console.log('quatinty', cartQuantity)

    return (
        <div>
            {cartQuantity ? (<div>
                <div className='tableBuyItems'>
                    {itemCart.map((elem) => {
                        return <EachCart key={elem.id} product={elem} />
                    })}

                    <div>
                        <p> total: {priceTotal}</p>
                    </div>

                </div>
                <div className='btnDeleteAll'>
                    <button onClick={() => deleteAllProducts()}>Delete ALL</button>
                </div>
            </div>) : (<div><p>There is no product in the cart </p> <NavLink to='/'>Go home</NavLink> </div>)}
        </div>

    )
}
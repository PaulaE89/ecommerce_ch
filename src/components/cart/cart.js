import { useCartContext } from '../../context/CartContext'
import { EachCart } from '../EachCart/EachCart'
import { NavLink } from 'react-router-dom'
import './cart.css'




export const Cart = () => {

    const { itemCart, deleteAllProducts, cartQuantity, priceTotal } = useCartContext();

    console.log('quatinty', cartQuantity)

    return (
        <div className='tableMainBuys'>
            {cartQuantity ? (<div>
                <div className='tableBuyItems'>
                    {itemCart.map((elem) => {
                        return <EachCart key={elem.id} product={elem} />
                    })}

                    <div className='totalPrice'>
                        <p className='totalPriceText'> Total Price: ${priceTotal}</p>
                    </div>

                </div>
                
                <div className='btnDeleteAll'>
                    <button onClick={() => deleteAllProducts()} className='removeAll'>Remove All</button>
                    <div><NavLink to='/order' className='buyItem'> Buy</NavLink></div>
                </div>
                
            </div>) : (<div className='noProducts'><p className='textNoProducts'>There is no product in the cart </p> <NavLink to='/' className='homeAgain'>Go home</NavLink> </div>)}
        </div>

    )
}
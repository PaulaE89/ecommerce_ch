import imageCart from '../../assets/card.webp'
import { useCartContext } from '../../context/CartContext'
import './CartWidget.css'



export const CartWidget = () => {

    const { cartQuantity } = useCartContext();

    return (
        <div><img src={imageCart} className='cartImage' alt='image_cart'></img><span>{cartQuantity}</span>
        </div>

    )
}
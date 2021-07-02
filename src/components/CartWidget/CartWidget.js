import imageCart from '../../assets/card.webp'
import './CartWidget.css'

export const CartWidget = () => {


    return (
        <div><img src={imageCart} className='cartImage' alt='image_cart'></img>
        </div>
    )
}
import './Item.css'

import { NavLink } from 'react-router-dom'
export const Item = ({ item }) => {

    const { id, title, price, pictureUrl } = item
    return (
        <div className='wrapper_product '>
            <div>
                <img src={pictureUrl} className='pictureList'></img> </div>
            <div className='wrapper_info_product'>
                < p className='title_pic'> {title} </p>
                <span className='price'>${price}</span>
                < div> <NavLink className='btn_see' to='/items/id'>SEE MORE</NavLink> </div>
            </div>
        </div>
    )
}
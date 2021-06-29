import './Item.css'
export const Item = ({ item }) => {

    const { title, price, pictureUrl } = item
    return (
        <div className='wrapper_product '>
            <div className='picture'>{pictureUrl}</div>
            <div className='wrapper_info_product'>
                < p className='title_pic'> {title} </p>
                <span className='price'>${price}</span> </div>
        </div>
    )
}
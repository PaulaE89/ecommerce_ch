import './Item.css'

export const Item = ({ item }) => {
  

    const { id, title, price, pictureUrl } = item


    return (

        <div className='wrapper_product '>


            <div className='picture'>{pictureUrl}</div>

            <div className='wrapper_info_product'>

                < a className='title_pic'> {title} </a>
                <span className='price'>${price}</span> </div>

        </div>
    )



}
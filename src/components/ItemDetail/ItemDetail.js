import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = (itemDetail) => {

    console.log('prueba', itemDetail.itemDetail.description)

    return (
        <div className='itemDetail'>
            <div className='pictureDetail'>
                <img src={itemDetail.itemDetail.picture} ></img>
            </div>
            <div className='informationDetail'>
                <div className='titleDetail'>{itemDetail.itemDetail.title}</div>
                <div className='sizeDetail'>Size : {itemDetail.itemDetail.size}</div>
                <div className='descriptionDetail'> Description :  {itemDetail.itemDetail.description} </div>
                <div className='priceDetail'>${itemDetail.itemDetail.price}</div>

                <ItemCount value={0} stock='10' />
            </div>
       
        </div>
    )

}
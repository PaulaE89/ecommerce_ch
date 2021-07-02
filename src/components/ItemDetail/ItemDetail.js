import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'

export const ItemDetail = (itemDetail) => {

    return (
        <div className='itemDetail'>
            <div className='pictureDetail'>
                <img src={itemDetail.itemDetail[0].picture} ></img>
            </div>
            <div className='informationDetail'>
                <div className='titleDetail'>{itemDetail.itemDetail[0].title}</div>
                <div className='sizeDetail'>Size : {itemDetail.itemDetail[0].size}</div>
                <div className='descriptionDetail'> Description :  {itemDetail.itemDetail[0].description} </div>
                <div className='priceDetail'>${itemDetail.itemDetail[0].price}</div>
                <ItemCount value={0} stock='10' />
            </div>

        </div>
    )

}
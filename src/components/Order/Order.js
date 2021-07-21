
import { useCartContext } from '../../context/CartContext'

import { createContext, useContext, useState } from 'react'
import { dataBase } from '../../Firebase/firebase'

export const Order = () => {

    const { priceTotal, setPriceTotal,itemCart,setCartQuantity,setItemCart } = useCartContext();
    const [IsLoading, setLoading] = useState(false);
    const [createOrder, setCreatOrder] = useState(false)    
    const [orderId, setOrderId] = useState(false)

  
    const newOrder = {
        "client": {
            name: 'paula',
            phone: '2334',
            email: 'paeb08@gmail.com'
        },

        "items": {
            id: itemCart,
        },
        "total": priceTotal
    }

    const createOrders = () => {
        const db = dataBase;
        const orders = db.collection('orders')
        orders.add(newOrder).then(({ id }) => {
            console.log(`the Id has been created ${id}`)
            setCreatOrder(true)
            setOrderId(id)
        }).catch((err) => {
            console.log('error :', err)
        }).finally(() => {
            setPriceTotal(0)
            setCartQuantity(0)
            setItemCart([])
            setLoading(false);
        })

    }

    return (


        <div>

            {createOrder?(<div>tu orden ha sido creada con el número {orderId}</div>):(<div>
                <p><button onClick={createOrders}>Confirmar compra</button></p>
            </div>)}

        </div>
    )
}



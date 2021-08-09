import { useCartContext } from '../../context/CartContext'
import { useState } from 'react'
import { dataBase } from '../../Firebase/firebase'
import './Order.css'

export const Order = () => {

    const { priceTotal, setPriceTotal, itemCart, setCartQuantity, setItemCart } = useCartContext();
    const [IsLoading, setLoading] = useState(false);
    const [createOrder, setCreatOrder] = useState(false)
    const [orderId, setOrderId] = useState(false)


    const [dataForm, setDataForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    }
    )


    const newOrder = {
        "client": {
            name: dataForm.firstName,
            lastName: dataForm.lastName,
            phone: dataForm.phone,
            email: dataForm.email
        },

        "items": {
            id: itemCart,
        },
        "total": priceTotal
    }

    const newOrderItem = { ...newOrder }

    const createOrders = () => {
        const db = dataBase;
        const orders = db.collection('orders')
        orders.add(newOrderItem).then(({ id }) => {
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
            upDateStock(newOrderItem)
        })

    }


    const handleInputForm = (event) => {
        // const target = event.target.value
        // const name = event.target.name
        setDataForm({
            ...dataForm,
            [event.target.name]: event.target.value
        })


    }

    const sendData = (event) => {
        event.preventDefault()
        createOrders()
        console.log(dataForm.firstName + ' ' + dataForm.lastName + ' ' + dataForm.email)

    }



    const upDateStock = () => {
        const db = dataBase;

        console.log('this is new order',newOrderItem)

        newOrderItem.items.forEach((product, index) => {
            setLoading(true)   



            const productUpdate = db.collection('products_hammy').doc(product.id);
            productUpdate
                .get()
                .then((doc => {
                    if (!doc.exists) {
                        console.log('sin resultados')
                    }
                    const returnedProduct = doc.data();
                    productUpdate.update({ stock: returnedProduct.stock - product.stock })

                }))
                .catch((error) => console.log(error))
                .finally(() => {
                    setLoading(false)
                });
        })


    }













    return (


        <div>

            {createOrder ? (<div className='msnOrderId'>Heyy {dataForm.firstName} your order has been created with the following number: {orderId}, thanks for your purchase</div>) :
                (<div className='confirmPurchase'>
                    <p className='nameOrder'>HEY!! please fill out the form </p>
                    <form className='formPurchase' onSubmit={sendData} name='formBuys'>
                        <label>First name:</label><br />
                        <input type="text" name="firstName" className='form' onChange={handleInputForm} required></input><br />
                        <label for="lname">Last name:</label><br />
                        <input type="text" name="lastName" className='form' onChange={handleInputForm} required></input><br />
                        <label >Email:</label><br />
                        <input type="text" name="email" className='form' onChange={handleInputForm} required></input><br />
                        <label >Phone:</label><br />
                        <input type="text" name="phone" className='form' onChange={handleInputForm} required></input><br />
                        <input type="submit" className='btnConfirm' value="confirm your purchase"></input>
                    </form>
                </div>)}

        </div>
    )
}



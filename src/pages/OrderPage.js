import {useAuth} from "../Helper/LoginContext";
import app from '../module/Firebase.js';
import {useEffect, useState} from "react";
import './OrderPage.css'

const db = app.firestore();


const OrderPage = () => {
    const [expanded, setExpanded] = useState(false)
    const {user} = useAuth();
    const [orders, setOrders] = useState();


    useEffect(() => {

        async function getOrders() {
            const result = await db.collection('orders').get()
            console.log(result)
            const orders = result.docs.map(doc => {
                return {...doc.data(), id: doc.id}

            })
            setOrders(orders)
        }

        getOrders();
    }, [])
    console.log(orders)

    function confirmedPaid(e, id) {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {
                order.paid = true
                return order
            } else {
                return order
            }
        })
        setOrders(updatedOrders)
        db.collection('orders').doc(id).update('paid', true)
        console.log(e.target.checked, id)
    }

    function confirmedShipped(e, id) {
        const updatedOrders = orders.map(order => {
            if (order.id === id) {
                order.shipped = true
                return order
            } else {
                return order
            }
        })
        setOrders(updatedOrders)
        db.collection('orders').doc(id).update('shipped', true)
    }


    return (

        <div>
            {orders &&
            orders.map(order => {
                return <div className="paid__shipment__checkbox">
                    <h3>Order ID: {order.id}</h3>
                    <p>Price: € {order.itemsPrice}</p>
                    <label htmlFor="paid">Paid:<input type="checkbox" checked={order.paid}
                                                      onChange={(e) => confirmedPaid(e, order.id)}/></label>
                    <label htmlFor="shipped">Shipped:<input type="checkbox" checked={order.shipped}
                                                            onChange={(e) => confirmedShipped(e, order.id)}/></label>
                    <button className="expand__button" onClick={() => setExpanded(!expanded)}>+</button>
                    {expanded && <>
                        <div className="shipping__info">
                            <h3>Address</h3>

                            <p>{order.shippingInfo.streetName} {order.shippingInfo.houseNumber}</p>
                            <p>{order.shippingInfo.postalCode} {order.shippingInfo.city}</p>

                            <h3>Contact</h3>
                            <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
                            <p>{order.shippingInfo.phoneNumber}</p>
                            <p>{order.shippingInfo.email}</p>
                        </div>
                        <h3>Order Summary</h3>
                        <table className="order__summary">
                            <tr>
                                <th>Product ID</th>
                                <th>Product name</th>
                                <th>Product qty</th>
                                <th>Product price</th>
                            </tr>
                            {order.order.map(product => {
                                return <tr>
                                    <td>{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>{product.qty}</td>
                                    <td>{product.price}</td>
                                </tr>
                            })}
                        </table>
                    </>}
                </div>
            })}
        </div>

    )
}

export default OrderPage;
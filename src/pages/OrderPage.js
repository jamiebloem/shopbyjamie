import {useAuth} from "../Helper/LoginContext";
import app from '../module/Firebase.js';
import {useEffect, useState} from "react";

const db = app.firestore();


const OrderPage = () => {
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
                return <div>
                    {order.itemsPrice} <label htmlFor="paid">Paid:<input type="checkbox" checked={order.paid}
                                                                         onChange={(e) => confirmedPaid(e, order.id)}/></label>
                    <label htmlFor="shipped">Shipped:<input type="checkbox" checked={order.shipped}
                                                            onChange={(e) => confirmedShipped(e, order.id)}/></label>
                </div>
            })}
        </div>
    )
}

export default OrderPage;
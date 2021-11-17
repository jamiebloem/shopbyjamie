import app from '../module/Firebase.js';
import {useEffect, useState} from "react";
import './OrderPage.css'
import OrderDetails from "../components/OrderDetails";
import ShippingInfo from "../components/ShippingInfo";
import OrderSummary from "../components/OrderSummary";

const db = app.firestore();


const OrderPage = () => {
    const [expanded, setExpanded] = useState(false)
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
                <OrderSummary confirmedPaid={confirmedPaid} confirmedShipped={confirmedShipped} order={order}
                              expanded={expanded} setExpanded={setExpanded}/>
                {expanded && <>
                    <ShippingInfo order={order}/>
                    <OrderDetails order={order}/>
                </>}
            </div>
        })}
    </div>

)
}

export default OrderPage;
function OrderSummary ({order, confirmedPaid, confirmedShipped, setExpanded, expanded}) {

    return (
        <>
            <h3>Order ID: {order.id}</h3>
            <p>Price: € {order.itemsPrice}</p>
            <label htmlFor="paid">Paid:<input type="checkbox" checked={order.paid}
                                              onChange={(e) => confirmedPaid(e, order.id)}/></label>
            <label htmlFor="shipped">Shipped:<input type="checkbox" checked={order.shipped}
                                                    onChange={(e) => confirmedShipped(e, order.id)}/></label>
            <button className="expand__button" onClick={() => setExpanded(!expanded)}>+</button>

        </>
    )


}
export default OrderSummary;
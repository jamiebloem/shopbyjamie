function OrderSummary(props) {

    return (
        <>
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
        </>

    )
}

export default OrderSummary;
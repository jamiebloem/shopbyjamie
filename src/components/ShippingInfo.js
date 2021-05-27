function ShippingInfo({order}) {
    return (
        <div className="shipping__info">
            <h3>Address</h3>

            <p>{order.shippingInfo.streetName} {order.shippingInfo.houseNumber}</p>
            <p>{order.shippingInfo.postalCode} {order.shippingInfo.city}</p>

            <h3>Contact</h3>
            <p>{order.shippingInfo.firstName} {order.shippingInfo.lastName}</p>
            <p>{order.shippingInfo.phoneNumber}</p>
            <p>{order.shippingInfo.email}</p>
        </div>)
}

export default ShippingInfo
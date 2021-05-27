import {useCart} from "../Helper/ShoppingCartContext";

function PriceSummary() {
    const {cartItems, setCartItems, onAdd, onRemove, totalPrice, itemsPrice, shippingPrice} = useCart();

    return (
        <>
            <hr></hr>
            <div className="cart__price">
                <div>Items Price</div>
                <div className="cart__row_right">€{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="cart__price">
                <div>Shipping Price</div>
                <div className="cart__row_right">€{shippingPrice.toFixed(2)}</div>
            </div>
            <div className="cart__price">
                <div><strong>Total Price</strong></div>
                <div className="cart__row_right"><strong>€{totalPrice.toFixed(2)}</strong></div>
            </div>
            <hr></hr>

        </>
    )

}

export default PriceSummary;
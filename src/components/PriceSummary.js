import {useCart} from "../Helper/ShoppingCartContext";
import './PriceSummary.css'

function PriceSummary() {
    const {totalPrice, itemsPrice, shippingPrice} = useCart();

    return (
        <>
            <div className="price__summary">
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
            </div>

        </>
    )
}

export default PriceSummary;
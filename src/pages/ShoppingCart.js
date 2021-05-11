import './ShoppingCart.css'
import { useHistory } from 'react-router-dom';
function ShoppingCart(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 30 ? 0 : 5.95;
    const totalPrice = itemsPrice + shippingPrice;

    const history = useHistory();
    function handleClick() {
        history.push("/check-out")
    }

    return (
        <>
            <h1>Shopping Cart</h1>
            <div className="cart__display-products">
                {cartItems.length === 0 && <div className="cart__display-products">Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <div key={item.id} className="cart__row">
                    <div className="cart__row">{item.name}</div>
                    <div>
                        <button onClick={() => onAdd(item)} className="cart__button__add">+</button>
                    </div>
                    <div>
                        <button onClick={() => onRemove(item)} className="cart__button__remove">-</button>
                    </div>

                    <div className="cart__text-right">
                        {item.qty} x €{item.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <hr></hr>
                    <div className="cart__row">
                        <div>Items Price</div>
                        <div className="cart__row_right">€{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="cart__row">
                        <div>Shipping Price</div>
                        <div className="cart__row_right">€{shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="cart__row">
                        <div><strong>Total Price</strong></div>
                        <div className="cart__row_right"><strong>€{totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <hr></hr>
                    <button className="cart__row" onClick={handleClick}>
                        CHECKOUT
                    </button>
                </>
            )}
        </>
    )
};


export default ShoppingCart;

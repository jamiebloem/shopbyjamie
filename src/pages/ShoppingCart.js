import './ShoppingCart.css'
import { useHistory } from 'react-router-dom';
import { useAuth } from "../Helper/LoginContext";
import { useCart } from "../Helper/ShoppingCartContext";


function ShoppingCart(props) {
    const {user, setUser} = useAuth();
    const {cartItems, setCartItems, onAdd, onRemove, totalPrice, itemsPrice, shippingPrice} = useCart();

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
                    <div>Item: {item.name}</div>
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
                    <button className="cart__button__checkout" onClick={handleClick}>
                        CHECKOUT
                    </button>
                </>
            )}
        </>
    )
};


export default ShoppingCart;

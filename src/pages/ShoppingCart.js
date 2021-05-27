import './ShoppingCart.css'
import {useHistory} from 'react-router-dom';
import {useAuth} from "../Helper/LoginContext";
import {useCart} from "../Helper/ShoppingCartContext";
import {RiAddBoxLine, RiSubtractLine} from 'react-icons/ri'
import PriceSummary from "../components/PriceSummary";


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
                    <div className="cart__text-right">
                        {item.qty} x €{item.price.toFixed(2)}
                    </div>
                    <div className="cart__buttons">
                        <button onClick={() => onAdd(item)} className="cart__button__add"><RiAddBoxLine/></button>
                        <button onClick={() => onRemove(item)} className="cart__button__remove"><RiSubtractLine/></button>
                    </div>

                </div>
            ))}
            {cartItems.length !== 0 && (
                <>
                <PriceSummary/>
                <button className="cart__button__checkout" onClick={handleClick}>
                    CHECKOUT
                </button>
                </>
            )}
        </>
    )
};


export default ShoppingCart;

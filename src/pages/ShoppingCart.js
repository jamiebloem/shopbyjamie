import './ShoppingCart.css'
import {useHistory} from 'react-router-dom';
import {useCart} from "../Helper/ShoppingCartContext";
import PriceSummary from "../components/PriceSummary";
import CartItem from "../components/CartItem";


function ShoppingCart() {
    const {cartItems} = useCart();

    const history = useHistory();

    function handleClick() {
        history.push("/check-out")
    }

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart__display-products">
                {cartItems.length === 0 && <div className="cart__display-products">Cart is Empty</div>}
            </div>
            {cartItems.map((item) => (
                <CartItem item={item} key={item.id}/>
            ))}
            {cartItems.length !== 0 && (
                <>
                    <PriceSummary/>
                    <button className="cart__button__checkout" onClick={handleClick}>
                        CHECKOUT
                    </button>
                </>
            )}
        </div>
    )
};


export default ShoppingCart;

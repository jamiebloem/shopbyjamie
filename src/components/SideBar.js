import {RiShoppingBagLine} from "react-icons/ri";
import ShoppingCart from "../pages/ShoppingCart";
import {useCart} from "../Helper/ShoppingCartContext";
import {useHistory} from "react-router-dom";
import './SideBar.css'

function SideBar() {
    const {cartItems} = useCart();

    const history = useHistory();
    function handleClick() {
        history.push("/shopping-cart")
    }


    return (
        <aside>
            <div className="cart__icon">
                <RiShoppingBagLine size="2em"/>
                { ' '}
                {cartItems.length ? (
                        <button className="cart__button__badge cart__button__badge--overlap">{cartItems.length}</button>)
                    : ('')}

            </div>
            <button onClick={handleClick}>Exstensive overview</button>
            <ShoppingCart />
        </aside>
    )}

export default SideBar;

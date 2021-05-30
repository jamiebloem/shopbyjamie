import {Link, NavLink, useHistory} from 'react-router-dom'
import './TopMenu.css';
import Logo from '../assets/logo.png'
import {useCart} from "../Helper/ShoppingCartContext";
import PrivateLink from "./PrivateLink";
import app from '../module/Firebase';
import {useAuth} from "../Helper/LoginContext";

function TopMenu(props) {
    const {cartItems, setCartItems} = useCart();
    const {user} = useAuth();


    const history = useHistory();

    function handleClick() {
        history.push("/")
    }

    return (
        <nav>
            <div className="topmenu__header">
                <img className="topmenu__logo" src={Logo} onClick={handleClick}/>
            </div>
            <div className="topmenu__navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link" className="topmenu__navigation-link">HOME</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active-link" className="topmenu__navigation-link">PRODUCTS</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping-cart" activeClassName="active-link" className="topmenu__navigation-link">SHOPPING CART{ ' '}
                            {cartItems.length ? (
                                <button className="cart__button__badge">{cartItems.length}</button>)
                                : ('')
                            }</NavLink>
                    </li>
                    <li>
                        <NavLink to="/check-out" activeClassName="active-link" className="topmenu__navigation-link">CHECKOUT</NavLink>
                    </li>
                    <li>
                        <PrivateLink to="/order-page" activeClassName="active-link" className="topmenu__navigation-link">ORDERS</PrivateLink>
                    </li>
                    {user &&
                    <li>
                        <button onClick={() => app.auth().signOut()}>LOG OUT</button>
                    </li>}
                </ul>
            </div>
            <div className="topmenu__sub-header">
                <p>Handmade Jewellery by Het Kralen Meisje</p>
            </div>
        </nav>
)
    ;
}

export default TopMenu;
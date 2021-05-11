import {NavLink} from 'react-router-dom'
import './TopMenu.css';
import Logo from '../assets/logo.png'

function TopMenu(props) {
    const { countCartItems } = props;
    return (
        <nav>
            <div className="topmenu__header">
                <h2 className="topmenu__heading">Het Kralen Meisje</h2>
                <img className="topmenu__logo" src={Logo} />
            </div>
            <div className="topmenu__navigation">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link" className="topmenu__navigation-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active-link" className="topmenu__navigation-link">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shopping-cart" activeClassName="active-link" className="topmenu__navigation-link">Shopping Cart{ ' '}
                            {countCartItems ? (
                                <button className="cart__button__badge">{countCartItems}</button>)
                                : ('')
                            }</NavLink>
                    </li>
                    <li>
                        <NavLink to="/check-out" activeClassName="active-link" className="topmenu__navigation-link">Checkout</NavLink>
                    </li>
                    <li>
                        <NavLink to="/sign-in" activeClassName="active-link" className="topmenu__navigation-link">Sign In</NavLink>
                    </li>
                </ul>
            </div>
            <div className="topmenu__sub-header">
                Handmade Jewellery
            </div>
        </nav>
)
    ;
}

export default TopMenu;
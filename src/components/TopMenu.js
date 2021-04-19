import {NavLink} from 'react-router-dom'
import './TopMenu.css';

function TopMenu() {
    return (
        <nav>
            <div className="nav-buttons">
                <h2>Het Kralen Meisje</h2>
                <p>HIER KOMT HET LOGO EN PROFILE, WINKELWAGEN BUTTON</p>
            </div>
            <div className="menu-items">
                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products" activeClassName="active-link">Producten</NavLink>
                    </li>
                </ul>
            </div>
            <div className="nav-line">
                Handmade Jewellery
            </div>
        </nav>
)
    ;
}

export default TopMenu;
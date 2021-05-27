import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect, useHistory
} from 'react-router-dom';
import './App.css';
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import TopMenu from "./components/TopMenu"
import CheckoutPage from "./pages/CheckoutPage";
import SignIn from "./pages/SignIn";
import ShoppingCart from "./pages/ShoppingCart";
import OrderPage from "./pages/OrderPage";
import LoginContextComponent, {useAuth} from './Helper/LoginContext.js'
import PrivateRoute from "./components/PrivateRoute";
import {RiShoppingBagLine} from 'react-icons/ri';
import {useCart} from "./Helper/ShoppingCartContext";


function App() {
    const {user} = useAuth();
    const {cartItems} = useCart();

    const history = useHistory();
    function handleClick() {
        history.push("/shopping-cart")
    }

    return (

                <Router>
                    <div>
                    <aside>
                        <div className="cart__icon">
                            <RiShoppingBagLine size="2em"/>
                            { ' '}
                            {cartItems.length ? (
                                    <button className="cart__button__badge cart__button__badge--overlap">{cartItems.length}</button>)
                                : ('')}

                        </div>
                        <button onClick=" ">Exstensive overview</button>
                        <ShoppingCart />
                    </aside>
                    <TopMenu/>

                    <Switch>
                        <Route exact path="/">
                            <HomePage/>
                        </Route>
                        <Route path="/products">
                            <ProductPage/>
                        </Route>
                        <Route path="/shopping-cart">
                            <ShoppingCart/>
                        </Route>
                        <Route path="/check-out">
                            <CheckoutPage/>
                        </Route>
                        <Route path="/admin">
                            {!user ? <SignIn/> : <Redirect to="/order-page"/>}
                        </Route>
                        <PrivateRoute path="/order-page">
                            <OrderPage/>
                        </PrivateRoute>
                    </Switch>
                    </div>
                </Router>



    );
}

export default App;

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import TopMenu from "./components/TopMenu"
import CheckoutPage from "./pages/CheckoutPage";
import SignIn from "./pages/SignIn";
import ShoppingCart from "./pages/ShoppingCart";
import OrderPage from "./pages/OrderPage";
import LoginContextComponent from './Helper/LoginContext.js'
import { db } from './module/Firebase.js';
import PrivateRoute from "./components/PrivateRoute";

function App() {

    return (
        <>

                <LoginContextComponent>
                    <Router>
                        <TopMenu />
                        <Switch>
                            <Route exact path="/">
                                <HomePage/>
                            </Route>
                            <Route path="/products">
                                <ProductPage />
                            </Route>
                            <Route path="/shopping-cart">
                                <ShoppingCart/>
                            </Route>
                            <Route path="/check-out">
                                <CheckoutPage/>
                            </Route>
                            <Route path="/sign-in">
                                <SignIn/>
                            </Route>
                            <PrivateRoute path="/order-page">
                                <OrderPage/>
                            </PrivateRoute>
                        </Switch>
                    </Router>
                </LoginContextComponent>

        </>


    );
}

export default App;

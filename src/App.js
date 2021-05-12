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
import LoginContextComponent from './Helper/LoginContext.js'

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
                        </Switch>
                    </Router>
                </LoginContextComponent>

        </>


    );
}

export default App;

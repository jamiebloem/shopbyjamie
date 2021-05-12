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
import products from "./data/products.json";
import {useState} from 'react';
import ShoppingCart from "./pages/ShoppingCart";
import LoginContextComponent from './Helper/LoginContext.js'

function App() {
    const {product} = products;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        console.log("PRODUCT", product)
        const exist = cartItems.find(cartItem => cartItem.id === product.id)
        if (exist) {
            const updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.id === product.id) {
                    return {...exist, qty: exist.qty + 1}
                } else {
                    return cartItem
                }
            })
            setCartItems(updatedCartItems)
        } else {
            const updatedCartItems = [...cartItems, {...product, qty: 1}]
            setCartItems(updatedCartItems)
        }

    }
    const onRemove = (product) => {
        const exist = cartItems.find(cartItem => cartItem.id === product.id)
        if (exist.qty === 1) {
            const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== product.id)
            setCartItems(updatedCartItems)
        } else {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === product.id) {
                    return {...exist, qty: exist.qty - 1}
                } else {
                    return cartItem;
            }})
            setCartItems(updatedCartItems)
        }
    }

    return (
        <>
        <LoginContextComponent>
            <Router>
                <TopMenu countCartItems={cartItems.length}/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/products">
                        <ProductPage products={product} onAdd={onAdd} onRemove={onRemove}/>
                    </Route>
                    <Route path="/shopping-cart">
                        <ShoppingCart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
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

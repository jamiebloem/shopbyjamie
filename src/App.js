import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import './App.css';
import ProductPage from "./pages/ProductPage";
import HomePage from "./pages/HomePage";
import TopMenu from "./components/TopMenu"


function App() {
    return (
        <>
            <Router>
                <TopMenu />
                <Switch>
                    <Route exact path="/">
                    <HomePage />
                    </Route>
                    <Route path="/products">
                    <ProductPage/>
                    </Route>
                </Switch>
            </Router>
        </>


    );
}

export default App;

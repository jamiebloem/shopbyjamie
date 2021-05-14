import {useAuth} from "../Helper/LoginContext";
import {Route, Redirect} from 'react-router-dom';

function PrivateRoute(props) {
    const {user} = useAuth();

    return (
        <Route path={props.path}>
            {user ? props.children : <Redirect to="/sign=in"/>}
        </Route>

    )

}

export default PrivateRoute;
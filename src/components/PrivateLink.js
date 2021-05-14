import {useAuth} from "../Helper/LoginContext";
import {Route, Redirect, Link} from 'react-router-dom';

function PrivateLink(props) {
    console.log("LOG", props)
    const {user} = useAuth();

    return (
        <>
            {user &&
                <Link className={props.className} to={props.to} activeClassName={props.activeClassName}>
            {props.children}
                </Link>
            }

        </>
    )

}

export default PrivateLink;
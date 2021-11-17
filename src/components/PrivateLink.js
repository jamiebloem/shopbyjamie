import {useAuth} from "../Helper/LoginContext";
import {Link} from 'react-router-dom';

function PrivateLink(props) {
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
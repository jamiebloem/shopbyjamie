import {useAuth} from "../Helper/LoginContext";

const OrderPage = () => {
    const {user} = useAuth();


    return (
        <p> Hallo </p>
    )
}

export default OrderPage;
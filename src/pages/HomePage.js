import './HomePage.css';
import {useHistory} from "react-router-dom";


function HomePage() {

    const history = useHistory();

    function handleClick() {
        history.push("/products")
    }

    return (
        <>
            <div className="homepage__content">
                <div className="homepage__text">
                    <h1 className="text">THANK YOU FOR VISITING</h1>
                </div>
                <img className="frontpage__image"
                     src="https://firebasestorage.googleapis.com/v0/b/shopbyjamie-f655d.appspot.com/o/lips.PNG?alt=media&token=442b453a-a27e-4f30-a484-d904af4ad54a"
                    onClick={handleClick}/>
            </div>
        </>
    )
};


export default HomePage;

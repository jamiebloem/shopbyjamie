import './Product.css';
import {useCart} from "../Helper/ShoppingCartContext";

const Product = (props) => {
    const {onAdd} = useCart();
    const { product} = props;


    return (
        <div className="product__container">
            <img className="product__image" src={product.imageUrl}/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>€{product.price.toFixed(2)}</p>
            <button onClick={() => onAdd(product)} className="product__button">Add to cart</button>
        </div>
    )
}

export default Product;
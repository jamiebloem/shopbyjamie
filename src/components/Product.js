import './Product.css';
import {useCart} from "../Helper/ShoppingCartContext";

const Product = (props) => {
    const {onAdd} = useCart();
    const {product} = props;


    return (
        <div className="product__container">

            <img alt="product" className="product__image" src={product.imageUrl} onClick={() => onAdd(product)}/>

            <div className="product__description">
                <strong>{product.name}</strong>
                <p>{product.description}</p>
                <p>€{product.price.toFixed(2)}</p>
            </div>
            <button onClick={() => onAdd(product)} className="product__button">Add to cart</button>
        </div>
    )
}

export default Product;
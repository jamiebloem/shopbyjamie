import './Product.css';

const Product = (props) => {

    const { product, onAdd } = props;

    return (
        <div className="product__container">
            <img className="product__image" src="https://firebasestorage.googleapis.com/v0/b/granny-adress-reminder.appspot.com/o/armbandExample.png?alt=media&token=5a400dba-8b4d-43c2-a237-2a3f3fecbbfc"/>
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>€{product.price.toFixed(2)}</p>
            <button onClick={() => onAdd(product)} className="product__button">Add to cart</button>
        </div>
    )
}

export default Product;
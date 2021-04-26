const Product = (props) => {
    return (
        <div className="product__container">
        <li>
            <img className="product__image" src="https://firebasestorage.googleapis.com/v0/b/granny-adress-reminder.appspot.com/o/armbandExample.png?alt=media&token=5a400dba-8b4d-43c2-a237-2a3f3fecbbfc"/>
            <p>{props.product.name}</p>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
            <button>Shop nu</button>
        </li>
        </div>
    )
}

export default Product;
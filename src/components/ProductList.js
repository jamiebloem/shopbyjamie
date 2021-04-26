import Products from "../data/products.json";
import ProductExample from "../assets/kralenmeisje.PNG";
import './Product.css';


function Product() {
    return (
        <>
        <h1>Producten</h1>
    <div className="product-information">
        <ol>
            {Products.map((product, index) => {
                return <ul>
                    <li>
                        <img src={ProductExample}/>
                    </li>

                    <li>{product.name}
                        {product.description}
                        {product.price}</li>
                    <button>Shop nu</button>

                </ul>
            })};
        </ol>
    </div>
        </>
    )
}

export default Product;
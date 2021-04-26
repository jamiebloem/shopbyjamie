import products from "../data/products.json";

import './ProductList.css';
import Product from "./Product";


function ProductList() {
    return (
        <>
            <h1>Producten</h1>
            <div className="product__container">
            <div className="product">
                <ul>
                    {products.map((product, index) => {
                        return <Product product={product}/>
                    })};
                </ul>
            </div>
            </div>
        </>
    )
}

export default ProductList;
import products from "../data/products.json";

import './ProductList.css';
import Product from "./Product";


function ProductList() {

    return (
        <>
            <h1>Products</h1>
            <div className="product-list">
                    {products.map((product, index) => {
                        return <Product product={product} />
                    })}
            </div>
        </>
    )
}

export default ProductList;
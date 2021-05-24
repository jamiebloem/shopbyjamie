import products from "../data/products.json";

import './ProductList.css';
import Product from "./Product";


function ProductList() {

    return (
        <main className="product__page">
            <h1>Products</h1>
            <div className="product__list">
                    {products.map((product, index) => {
                        return <Product product={product} />
                    })}
            </div>
        </main>
    )
}

export default ProductList;
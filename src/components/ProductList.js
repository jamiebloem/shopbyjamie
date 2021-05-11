import products from "../data/products.json";

import './ProductList.css';
import Product from "./Product";


function ProductList(props) {
    const { product, onAdd } = props;
    return (
        <>
            <h1>Producten</h1>
            <div className="product-list">
                    {products.map((product, index) => {
                        return <Product product={product} onAdd={onAdd}/>
                    })};
            </div>
        </>
    )
}

export default ProductList;
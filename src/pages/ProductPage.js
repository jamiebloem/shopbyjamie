import './ProductPage.css';

import ProductList from "../components/ProductList";

function ProductPage(props) {
    const { onAdd } = props;


    return (

        <>
            <ProductList onAdd={onAdd}/>
        </>
    )
};


export default ProductPage;

import {createContext, useState, useContext} from 'react';

export function addItemToCart(cartItems, product) {
    const exist = cartItems.find(cartItem => cartItem.id === product.id)
    if (exist) {
        const updatedCartItems = cartItems.map(cartItem => {
            if (cartItem.id === product.id) {
                return {...exist, qty: exist.qty + 1}
            } else {
                return cartItem
            }
        })
        return updatedCartItems
    } else {
        const updatedCartItems = [...cartItems, {...product, qty: 1}]
        return updatedCartItems
    }
}

export function removeItemFromCart(cartItems, product) {
    const exist = cartItems.find(cartItem => cartItem.id === product.id)
    if (exist.qty === 1) {
        const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== product.id)
        return updatedCartItems
    } else {
        const updatedCartItems = cartItems.map((cartItem) => {
            if (cartItem.id === product.id) {
                return {...exist, qty: exist.qty - 1}
            } else {
                return cartItem;
            }
        })
        return updatedCartItems
    }
}

export const Index = createContext({});

function ShoppingCartContextComponent(props) {
    const [cartItems, setCartItems] = useState([]);
    const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
    const shippingPrice = itemsPrice > 30 ? 0 : 5.95;
    const totalPrice = itemsPrice + shippingPrice;

    const onAdd = (product) => {
        const updatedCartItems = addItemToCart(cartItems, product)
        setCartItems(updatedCartItems)

    }

    const onRemove = (product) => {
        const updatedCartItems = removeItemFromCart(cartItems, product)
        setCartItems(updatedCartItems)
    }


    return (
        <Index.Provider value={{
            cartItems: cartItems, setCartItems: setCartItems, onAdd: onAdd, onRemove: onRemove, totalPrice: totalPrice, itemsPrice: itemsPrice, shippingPrice: shippingPrice
        }}>{props.children}</Index.Provider>
    )


}

export function useCart() {

    return useContext(Index)
}

export default ShoppingCartContextComponent;
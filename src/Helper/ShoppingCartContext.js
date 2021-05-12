import {createContext, useState, useContext} from 'react'
import app from '../module/Firebase';


export const ShoppingCartContext = createContext({});

function ShoppingCartContextComponent(props) {
    const [cartItems, setCartItems] = useState([]);

    const onAdd = (product) => {
        console.log("PRODUCT", product)
        const exist = cartItems.find(cartItem => cartItem.id === product.id)
        if (exist) {
            const updatedCartItems = cartItems.map(cartItem => {
                if (cartItem.id === product.id) {
                    return {...exist, qty: exist.qty + 1}
                } else {
                    return cartItem
                }
            })
            setCartItems(updatedCartItems)
        } else {
            const updatedCartItems = [...cartItems, {...product, qty: 1}]
            setCartItems(updatedCartItems)
        }

    }

    const onRemove = (product) => {
        const exist = cartItems.find(cartItem => cartItem.id === product.id)
        if (exist.qty === 1) {
            const updatedCartItems = cartItems.filter((cartItem) => cartItem.id !== product.id)
            setCartItems(updatedCartItems)
        } else {
            const updatedCartItems = cartItems.map((cartItem) => {
                if (cartItem.id === product.id) {
                    return {...exist, qty: exist.qty - 1}
                } else {
                    return cartItem;
                }
            })
            setCartItems(updatedCartItems)
        }
    }


    return (
        <ShoppingCartContext.Provider value={{
            cartItems: cartItems, setCartItems: setCartItems, onAdd: onAdd, onRemove: onRemove
        }}>{props.children}</ShoppingCartContext.Provider>
    )


}

export function useCart() {

    return useContext(ShoppingCartContext)
}

export default ShoppingCartContextComponent;
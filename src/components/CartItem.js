import {RiAddBoxLine, RiSubtractLine} from "react-icons/ri";
import {useCart} from "../Helper/ShoppingCartContext";
import './CartItem.css'

function CartItem( {item}) {
    const {onAdd, onRemove} = useCart();

    return (
        <div key={item.id} className="cart__row">
            <div>Item: {item.name}</div>
            <div className="cart__text-right">
                {item.qty} x €{item.price.toFixed(2)}
            </div>
            <div className="cart__buttons">
                <button onClick={() => onAdd(item)} className="cart__button__add"><RiAddBoxLine/></button>
                <button onClick={() => onRemove(item)} className="cart__button__remove"><RiSubtractLine/></button>
            </div>

        </div>
    )
}


export default CartItem;
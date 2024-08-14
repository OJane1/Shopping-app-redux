import { useDispatch } from "react-redux";
import dataClothes from "../data/ClothesData";
import { removeItemFromCart } from "../redux/cartSlice";

const CartItem = ({cartItem}) => {

    const clothes = dataClothes.find(item => item.id === cartItem.dressId);
    const dispatch = useDispatch();

    return(<div>
        <p>{clothes.name}</p>
        <p>{cartItem.quantity}</p>
        <p>$ {clothes.price * cartItem.quantity}</p>
        <span onClick={() => dispatch(removeItemFromCart({cartItemId : cartItem.id}))}>
        <img className="icon" src="https://img.icons8.com/?size=100&id=107448&format=png&color=000000" alt="bin"/>
        </span>
    </div>)
}

export default CartItem;
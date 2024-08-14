import { useState } from "react";
import ChangeQuantity from "../../Cart/ChangeQuantity";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const Clothing = ({dress}) => {

const [quantity, setQuantity] = useState(1);
const dispatch = useDispatch();

    return(<div>
        <img src={`./${dress.img}.jpg`} alt="clothing"/>
        <h2>{dress.name}</h2>
        <p>$ {dress.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        <button onClick={()=> {dispatch(addItemToCart({dress, quantity}))}}>ADD TO CART</button>
    </div>)
}

export default Clothing;

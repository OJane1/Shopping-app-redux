import Clothing from "./Clothing";
import dataClothes from "../../data/ClothesData";
import { useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/clothesSlice";

const Clothes = () => {

    const selectedCategory = useSelector(getSelectedCategory);

    return(<div className="container">
        {dataClothes
        .filter(dress => {
            if (selectedCategory === 'ALL') return true;
            return selectedCategory === dress.category;
        }
    )
        .map((dress) => (
        <div className="clothes-item" key={dress.id}>
            <Clothing dress={dress}/>
            </div>
            ))
        }
        
    </div>)
}

export default Clothes;
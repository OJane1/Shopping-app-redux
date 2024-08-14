import Filter from "./Filter";

const categories = ['DRESSES', 'TOPS', 'ACCESSOIRES', 'SHORTS & PANTS', 'SKIRTS', 'JACKETS', 'ALL'];

const AllCategories = () => {
    return(<div>
        <h1>Our Collection</h1>

        {categories.map((category, index) => 
        <Filter category={category} key={index}/>)}
        
    
    </div>)
}

export default  AllCategories;
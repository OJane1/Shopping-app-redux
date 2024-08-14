import './App.css';
import Cart from './Cart/Cart';
import Clothes from './Components/ClothesComponents/Clothes';
import AllCategories from './Filter/AllCategories';

function App() {
  return (
    <div className="App">
      <div className="block">
     <AllCategories/>
     <Cart/>
     </div>
     <div className="container block">
     <Clothes/> 
     </div>
    </div>
  );
}

export default App;

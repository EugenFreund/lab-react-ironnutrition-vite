import { useState } from "react";
import "./App.css";
import foodsJson from './foods.json';
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodsArr, setFoodArr] = useState(foodsJson);

  const handleDelete = foodId => {
    setFoodArr(
      foodsArr.filter(food =>
        food.id !== foodId.target.value
      )
    );
  }

  const addNewFood = newFood => {
    setFoodArr([newFood, ...foodsArr])    
  }

  return (
    <div className="App">
      <h1>Food List</h1>
      <AddFoodForm addNewFood={addNewFood}/>
      {foodsArr.map( food => (
        <FoodBox key={food.id} food={food} handleDelete={handleDelete}  />
      ))}
    </div>
  );
}

export default App;

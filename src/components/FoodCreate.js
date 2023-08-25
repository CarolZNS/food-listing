import { useState } from "react";
import useFoodsContext from "../hooks/use-foods-context";

export default function FoodCreate() {
  const [dish, setDish] = useState("");
  const { createFood } = useFoodsContext();

  const handleChange = (e) => {
    setDish(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createFood(dish);
    setDish("");
  };

  return (
    <div className="book-create">
      <h3>Add a Food</h3>
      <form onSubmit={handleSubmit}>
        <label>Dish</label>
        <input className="input" value={dish} onChange={handleChange} />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}

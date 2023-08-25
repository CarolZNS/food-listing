import { useState } from "react";
import useFoodsContext from "../hooks/use-foods-context";

export default function FoodEdit({ food, onSubmit }) {
  const [dish, setDish] = useState(food.dish);
  const { editFoodById } = useFoodsContext();

  const handleChange = (event) => {
    setDish(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
    editFoodById(food.id, dish);
  };

  return (
    <form onSubmit={handleSubmit} className="book-edit">
      <label>Title</label>
      <input className="input" value={dish} onChange={handleChange} />
      <button className="button is-primary">Save</button>
    </form>
  );
}

import FoodShow from "./FoodShow";
import useFoodsContext from "../hooks/use-foods-context";

export default function FoodList() {
  const { foods } = useFoodsContext();

  const renderedFoods = foods.map((food) => {
    return <FoodShow key={food.id} food={food} />;
  });
  
  return <div className="book-list">{renderedFoods}</div>;
}

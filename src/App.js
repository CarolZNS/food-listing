import { useEffect } from "react";
import FoodCreate from "./components/FoodCreate";
import FoodList from "./components/FoodList";
import useFoodsContext from "./hooks/use-foods-context";

function App() {
  const { fetchDishes } = useFoodsContext();

  useEffect(() => {
    fetchDishes();
  }, []);

  return (
    <div className="app">
      <h1>Favorite Dishes</h1>
      <FoodList />
      <FoodCreate />
    </div>
  );
}

export default App;

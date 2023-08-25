import axios from "axios";
import { createContext, useState } from "react";

const FoodsContext = createContext();

function Provider({ children }) {
  const [foods, setFoods] = useState([]);
  const fetchDishes = async () => {
    const response = await axios.get("http://localhost:3001/foods");
    setFoods(response.data);
  };
  const editFoodById = async (id, newDish) => {
    const response = await axios.put(`http://localhost:3001/foods/${id}`, {
      dish: newDish,
    });

    const updatedFoods = foods.map((food) => {
      if (food.id === id) {
        return { ...food, ...response.data };
      }
      return food;
    });

    setFoods(updatedFoods);
  };

  const deleteFoodById = async (id) => {
    await axios.delete(`http://localhost:3001/foods/${id}`);

    const updatedFoods = foods.filter((food) => {
      return food.id !== id;
    });
    setFoods(updatedFoods);
  };

  const createFood = async (dish) => {
    const response = await axios.post("http://localhost:3001/foods", {
      dish,
    });
    const updatedFoods = [...foods, response.data];
    setFoods(updatedFoods);
  };

  const valueToShare = {
    foods,
    deleteFoodById,
    editFoodById,
    createFood,
    fetchDishes,
  };

  return (
    <FoodsContext.Provider value={valueToShare}>
      {children}
    </FoodsContext.Provider>
  );
}

export { Provider };
export default FoodsContext;

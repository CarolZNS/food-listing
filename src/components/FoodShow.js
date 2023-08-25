import { useState } from "react";
import FoodEdit from "./FoodEdit";
import useFoodsContext from "../hooks/use-foods-context";

export default function FoodShow({ food, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);
  const { deleteFoodById } = useFoodsContext();

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    deleteFoodById(food.id);
  };
  const handleSubmit = () => {
    setShowEdit(false);
  };

  let content = <h3>{food.dish}</h3>;
  if (showEdit) {
    content = <FoodEdit food={food} onSubmit={handleSubmit} />;
  }
  const dishUrl = food.dish.replaceAll(' ','');

  return (
    <div className="book-show">
      <img alt="food" src={`https://loremflickr.com/300/200/${dishUrl}`} />
      <div>{content}</div>
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          Edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
}

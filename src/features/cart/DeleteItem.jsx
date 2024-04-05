import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { delete_item } from "./cartSlice";

const DeleteItem = ({pizzaId}) => {
  
  const dispatch = useDispatch();
  
  return (
    <Button type="secondary" handleAddToCart={() => dispatch(delete_item(pizzaId))}>
      Delete
    </Button>
  );
};

export default DeleteItem;

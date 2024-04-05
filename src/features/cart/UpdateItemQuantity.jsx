import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { increase_item_qtd, decrease_item_qtd } from "./cartSlice";

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center justify-center gap-3">
      <Button
        type={"round"}
        handleAddToCart={() => dispatch(decrease_item_qtd(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button
        type={"round"}
        handleAddToCart={() => dispatch(increase_item_qtd(pizzaId))}
      >
        +
      </Button>
    </div>
  );
};

export default UpdateItemQuantity;

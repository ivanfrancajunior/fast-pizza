import { formatCurrency } from "../../utils/helpers";

import DeleteItem from "./DeleteItem";
import { useSelector } from "react-redux";
import UpdateItemQuantity from "./UpdateItemQuantity";

import { get_total_cart_quantity_by_id } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const current_quantity = useSelector(get_total_cart_quantity_by_id(pizzaId));
  return (
    <li className=" py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={current_quantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;

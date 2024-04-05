import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { get_total_cart_amount, get_total_cart_quantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const total_cart_qtd = useSelector(get_total_cart_quantity);
  const total_cart_amount = useSelector(get_total_cart_amount);

  if (!total_cart_qtd) return null;
  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className="space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>
          {total_cart_qtd} pizzas
        </span>
        <span>{formatCurrency(total_cart_amount)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;

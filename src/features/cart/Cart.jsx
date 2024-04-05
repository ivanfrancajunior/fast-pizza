import { Link } from "react-router-dom";
import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import { useDispatch, useSelector } from "react-redux";
import { get_cart, get_user, clear_cart } from "./cartSlice";

function Cart() {
  const cart = useSelector(get_cart);
  const user_name = useSelector(get_user);
  const dispatch = useDispatch();
  function handleClearCart() {
    dispatch(clear_cart());
  }

  if (!cart.length) return <EmptyCart />;
  return (
    <div className="px-4 py-3">
      <LinkButton to={"/menu"}> &larr; Back to menu </LinkButton>

      <h2 className="mt-7 text-2xl font-semibold">Your cart, {user_name}</h2>

      <ul className="mt-3 divide-y divide-stone-200 border-b">
        {cart &&
          cart.map((pizza) => <CartItem key={pizza.pizzaId} item={pizza} />)}
      </ul>

      <div className="mt-6 space-x-6">
        <Link to="/order/new"></Link>

        <Button type="primary" to="/order/new">
          {" "}
          Order pizzas
        </Button>
        <Button type="secondary" handleAddToCart={handleClearCart}>
          {" "}
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;

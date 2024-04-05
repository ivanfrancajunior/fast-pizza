import { useState } from "react";
import EmptyCart from "../cart/EmptyCart";
import { Form, redirect, useActionData, useNavigation } from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { clear_cart, get_cart, get_total_cart_amount } from "../cart/cartSlice";
import { fetch_address } from "../user/userSlice";

import { formatCurrency } from "../../utils/helpers";
import { store } from "../../store";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );
function CreateOrder() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const form_errors = useActionData();
  const [withPriority, setWithPriority] = useState(false);
  const cart = useSelector(get_cart);
  const total_cart_price = useSelector(get_total_cart_amount);
  const priority_price = withPriority ? Number(total_cart_price) * 0.2 : 0;
  const total_price = total_cart_price + priority_price;
  const {
    user_name,
    status: address_status,
    position,
    address,
    error: error_address,
  } = useSelector((store) => store.user);

  const is_loading_address = address_status === "loading";

  const is_submiting = navigation.state === "submitting";

  console.log(cart);

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6">
      <h2 className="mb-8 text-2xl font-semibold text-orange-400">
        Ready to order? Let&apos;s go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex grow flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">First Name</label>
          <input
            className="input_field grow "
            type="text"
            name="customer"
            defaultValue={user_name}
            required
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input
              className="input_field w-full"
              type="tel"
              name="phone"
              required
            />
            {form_errors?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {form_errors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="relative mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              className="input_field w-full"
              type="text"
              name="address"
              disabled={is_loading_address}
              defaultValue={address}
              required
            />
            {address_status === "error" && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {error_address}
              </p>
            )}
          </div>
          {!position.latitude && !position.longitude && (
            <span className="absolute right-[1px] top-[30px] z-50 md:top-[1px] ">
              <Button
                type="base"
                disabled={is_loading_address}
                handleAddToCart={(e) => {
                  e.preventDefault();
                  dispatch(fetch_address());
                }}
              >
                {is_loading_address ? "loading..." : "get position"}
              </Button>
            </span>
          )}
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <input
            type="hidden"
            name="position"
            value={
              position.longitude && position.longitude
                ? `${position.latitude}, ${position.longitude}`
                : ""
            }
          />

          <Button disabled={is_submiting || is_loading_address} type="primary">
            {is_submiting
              ? "Placing order...."
              : `Order now from ${formatCurrency(total_price)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const form_data = await request.formData();
  const data = Object.fromEntries(form_data);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true" ? true : false,
  };

  console.log(order);

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      "Please give us your correct phone number. We migth need it to contact you.";

  if (Object.keys(errors).length > 0) return errors;

  const new_order = await createOrder(order);

  store.dispatch(clear_cart());

  return redirect(`/order/${new_order.id}`);

  
}
export default CreateOrder;

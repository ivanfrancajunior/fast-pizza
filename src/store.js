import { configureStore } from "@reduxjs/toolkit";
import user_reducer from "./features/user/userSlice";
import cart_reducer from "./features/cart/cartSlice";
export const store = configureStore({
  reducer: {
    user: user_reducer,
    cart: cart_reducer,
  },
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cart_slice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    add_item(state, action) {
      state.cart.push(action.payload);
    },
    delete_item(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    increase_item_qtd(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decrease_item_qtd(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0)
        cart_slice.caseReducers.delete_item(state, action);
    },
    clear_cart(state) {
      state.cart = [];
    },
  },
});

export const {
  add_item,
  delete_item,
  increase_item_qtd,
  decrease_item_qtd,
  clear_cart,
} = cart_slice.actions;

export default cart_slice.reducer;

export const get_total_cart_quantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const get_total_cart_quantity_by_id = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;

export const get_total_cart_amount = (state) =>
  state.cart.cart.reduce(
    (sum, item) => sum + item.totalPrice * item.quantity,
    0,
  );

export const get_cart = (state) => state.cart.cart;

export const get_user = (state) => state.user.user_name;

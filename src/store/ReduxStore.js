import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "../store/slices/productsSlice";
import cartReducer from "../store/slices/cartSlice";

// console.log(productsReducer);

export const ReduxStore = configureStore({
  reducer: {
    products: productsReducer,
    cartItems: cartReducer,
  },
});

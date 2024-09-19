import { createSlice } from "@reduxjs/toolkit";

function findItemIndex(state, action) {
  // console.log(action.payload.productid);
  return state.findIndex(
    (cartItem) => cartItem.productid === action.payload.productid
  );
}

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      if (existingItemIndex !== -1) {
        state.list[existingItemIndex].quantity += 1;
      } else {
        state.list.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list.splice(existingItemIndex, 1);
    },
    removeCartItemQuantity(state, action) {
      const existingItemIndex = findItemIndex(state.list, action);
      state.list[existingItemIndex].quantity -= 1;
      if (state.list[existingItemIndex].quantity === 0) {
        state.list.splice(existingItemIndex, 1);
      }
    },
  },
});

export const { addCartItem, removeCartItemQuantity, removeCartItem } =
  cartSlice.actions;
export default cartSlice.reducer;

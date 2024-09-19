import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    list: [],
    error: "",
    loading: false,
  },
  reducers: {
    updateAllProducts(state, action) {
      state.loading = false;
      state.list = action.payload;
      state.error = "";
    },
    fetchProductsError(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProducts(state) {
      state.loading = true;
    },
  },
});

export const { updateAllProducts, fetchProductsError, fetchProducts } =
  productSlice.actions;
export default productSlice.reducer;

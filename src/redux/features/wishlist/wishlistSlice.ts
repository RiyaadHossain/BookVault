import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface ProductState {
  total: number;
  items: number;
}

const initialState: ProductState = {
  total: 0,
  items: 350,
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},
});

export const {} = wishlistSlice.actions;
export default wishlistSlice.reducer;

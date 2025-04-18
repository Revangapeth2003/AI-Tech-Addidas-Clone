import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./CartSlice.js";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  devTools: true,
});

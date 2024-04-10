import { configureStore } from "@reduxjs/toolkit";
import customerSlice from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    customer: customerSlice,
  },
});

export default store;

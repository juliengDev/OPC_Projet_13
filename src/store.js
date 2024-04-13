import { configureStore } from "@reduxjs/toolkit";
import custormerSlice from "./features/customers/customerSlice";

const store = configureStore({
  reducer: {
    customer: custormerSlice,
  },
});

export default store;

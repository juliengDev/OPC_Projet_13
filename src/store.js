import { configureStore } from "@reduxjs/toolkit";
import custormerSlice from "./features/customers/customerSlicev3";

const store = configureStore({
  reducer: {
    customer: custormerSlice,
  },
});

export default store;

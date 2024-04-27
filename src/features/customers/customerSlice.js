import { createSlice } from "@reduxjs/toolkit";
import {
  fetchTokenData,
  fetchCustomerData,
  fetchCustomerUpdate,
} from "../../services/apiCustomer";

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  createdAt: "",
  updatedAt: "",
  id: "",
  token: "",
  remember: false,
  status: "",
  error: "",
};

const custormerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    logout(state) {
      Object.assign(state, initialState);
    },
    resetStatus(state) {
      state.status = "";
      state.error = "";
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchTokenData.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchTokenData.fulfilled, (state, action) => {
        state.token = action.payload;
        state.isLoading = false;
        state.status = "idle";
      })
      .addCase(fetchTokenData.rejected, (state, action) => {
        state.status = "error";
        state.isLoading = false;
        state.token = "";
        state.error = action.error.message;
      })
      .addCase(fetchCustomerData.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchCustomerData.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          isLoggedIn: true,
          status: "idle",
        };
      })
      .addCase(fetchCustomerData.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })
      .addCase(fetchCustomerUpdate.pending, (state) => {
        state.status = "loading";
        state.isLoading = true;
      })
      .addCase(fetchCustomerUpdate.fulfilled, (state, action) => {
        return {
          ...state,
          ...action.payload,
          isLoading: false,
          isLoggedIn: true,
          status: "idle",
        };
      })
      .addCase(fetchCustomerUpdate.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      }),
});

//selector functions
export const getCustomer = (state) => state.customer;
export const getToken = (state) => state.customer.token;
export const getError = (state) => state.customer.error;

export const { logout, resetStatus } = custormerSlice.actions;

export default custormerSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

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
};

const custormerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setLoggedInUser(state, action) {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    },
    setRemember(state, action) {
      state.remember = action.payload;
    },
    updateFirstName(state, action) {
      state.firstName = action.payload;
    },
    updateLastName(state, action) {
      state.lastName = action.payload;
    },
    logout(state) {
      Object.assign(state, initialState);
    },
  },
});

// old way of doing action creator
// export function getUser(email, lastName) {
//   return { type: "customer/setLoggedInUser", payload: { firstName, lastName } };
// }

//selector functions
export const getCustomer = (state) => state.customer;

export const {
  setRemember,
  setLoggedInUser,
  updateFirstName,
  updateLastName,
  logout,
} = custormerSlice.actions;

export default custormerSlice.reducer;

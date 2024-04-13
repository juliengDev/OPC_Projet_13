import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
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
    setToken(state, action) {
      state.token = action.payload;
      state.isLoading = true;
    },
    setAccount(state, action) {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
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
  },
});

// old way of doing action creator
// export function getUser(email, lastName) {
//   return { type: "customer/setAccount", payload: { firstName, lastName } };
// }

export const {
  setToken,
  setRemember,
  setAccount,
  updateFirstName,
  updateLastName,
} = custormerSlice.actions;
export default custormerSlice.reducer;

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
};

const custormerSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    // this is what we need to do if we want our action creator received just more than one argument. We have to prepare the payload with the selected arguments
    getAccount: {
      prepare(email, password) {
        return {
          payload: { email, password },
        };
      },
      reducer(state, action) {
        if (!state.email && !state.password) return;
        state.isLoading = true;
        state.email = action.payload.email;
        state.password = action.payload.password;
      },
    },
  },
});

// old way of doing action creator
// export function getUser(email, password) {
//   return { type: "account/getAccount", payload: { email, password } };
// }

export const { getAccount } = custormerSlice.actions;
export default custormerSlice.reducer;

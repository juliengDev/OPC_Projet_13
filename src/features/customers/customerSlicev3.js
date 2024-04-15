import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_URL = "http://localhost:3001/api/v1";

export const fetchTokenData = createAsyncThunk(
  "customer/fetchTokenData",
  async function (userObj) {
    try {
      const res = await fetch(`${API_URL}/user/login`, {
        method: "POST",
        body: JSON.stringify(userObj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();

      if (!res.ok) {
        if (data.status === 400)
          throw new Error(
            "Authentication failed. Please check your credentials and try again."
          );
        if (data.status === 500)
          throw new Error(
            "Oops! Something went wrong on our end. Please try again later."
          );
      }

      const { token } = data.body;

      if (data.status === 200) return token;
    } catch (err) {
      throw new Error(`Error recovering your profile: ${err.message}`);
    }
  }
);

export const fetchCustomerData = createAsyncThunk(
  "customer/fetchCustomerData",
  async function (authToken) {
    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`, // Ajoute le token d'autorisation dans les headers
        },
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.status === 400)
          throw new Error(
            "Authentication failed. Please check your credentials and try again."
          );
        if (data.status === 500)
          throw new Error(
            "Oops! Something went wrong on our end. Please try again later."
          );
      }
      const customer = data.body;
      if (data.status === 200) return customer;
    } catch (err) {
      throw new Error(`Error recovering your profile : ${err.message}`);
    }
  }
);

export const fetchCustomerUpdate = createAsyncThunk(
  "customer/fetchCustomerUpdate",
  async function (data) {
    const { token, payload } = data;
    try {
      const res = await fetch(`${API_URL}/user/profile`, {
        method: "PUT",
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Ajoute le token d'autorisation dans les headers
        },
      });

      const data = await res.json();
      if (!res.ok) {
        if (data.status === 400)
          throw new Error(
            "Authentication failed. Please check your credentials and try again."
          );
        if (data.status === 500)
          throw new Error(
            "Oops! Something went wrong on our end. Please try again later."
          );
      }
      const customer = data.body;
      // console.log(customer);
      if (data.status === 200) return customer;
    } catch (err) {
      throw new Error(`Error recovering your profile : ${err.message}`);
    }
  }
);

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
  status: "idle",
  error: "",
};

const custormerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    logout(state) {
      Object.assign(state, initialState);
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

export const {
  setRemember,
  setLoggedInUser,
  updateFirstName,
  updateLastName,
  logout,
} = custormerSlice.actions;

export default custormerSlice.reducer;

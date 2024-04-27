import { createAsyncThunk } from "@reduxjs/toolkit";

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
      throw new Error(`Error : ${err.message}`);
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

import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";

const backendURL = import.meta.env.VITE_BASE_URL;

export const userLogin = createAsyncThunk(
  "users/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/users/login`,
        { email, password },
        config,
      );
      // store user's token in local storage

      localStorage.setItem("userToken", data.data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "users/current-user",
  async (args, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/users/current-user`,
        config,
      );

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const userLogout = createAction("auth/logout");

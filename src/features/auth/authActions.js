import axios from "axios";
import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const backendURL = import.meta.env.VITE_BASE_URL;

export const userLogin = createAsyncThunk(
  "gradx/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      // configure header's Content-Type as JSON
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        `${backendURL}/gradx/login`,
        { email, password },
        config,
      );
      // store user's token in local storage

      toast.success(data.message);

      localStorage.setItem("userToken", data.data.token);
      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        console.error(error.message);
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getCurrentUser = createAsyncThunk(
  "gradx/current-user",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken");
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/gradx/current-user`,
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

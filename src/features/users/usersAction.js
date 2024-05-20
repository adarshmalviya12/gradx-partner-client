import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const backendURL = import.meta.env.VITE_BASE_URL;
const token = localStorage.getItem("userToken") ?? "";

export const getUsers = createAsyncThunk(
  "gradx/users",
  async (_, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${backendURL}/gradx/users`, config);

      return data;
    } catch (error) {
      // return custom error message from API if any
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      }

      return rejectWithValue(error);
    }
  },
);

export const createUser = createAsyncThunk(
  "gradx/create-user",
  async (formData, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${backendURL}/gradx/create-user`,
        formData,
        config,
      );
      if (data.message) toast.success(data.message);
      return data;
    } catch (error) {
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

export const updateUser = createAsyncThunk(
  "gradx/update-user",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(
        `${backendURL}/gradx/user/${id}`,
        formData,
        config,
      );
      if (data.message) toast.success(data.message);
      return data;
    } catch (error) {
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

export const deleteUser = createAsyncThunk(
  "gradx/user",
  async (id, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.delete(
        `${backendURL}/gradx/user/${id}`,
        config,
      );

      if (data.message) toast.success(data.message);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

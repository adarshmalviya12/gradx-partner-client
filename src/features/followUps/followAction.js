import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const backendURL = import.meta.env.VITE_BASE_URL;

export const addFollowUps = createAsyncThunk(
  "gradx/addFollowUps",
  async (formData, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.post(
        `${backendURL}/gradx/create-followUps`,
        formData,
        config,
      );

      if (data.message) toast.success(data.message);
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      }
      console.error(error.message);
    }
  },
);
export const getFollowUpsForUser = createAsyncThunk(
  "gradx/followUpsForUser",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/gradx/followUps/${id}`,
        config,
      );

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

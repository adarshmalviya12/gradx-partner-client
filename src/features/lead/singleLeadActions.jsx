import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import BASE_URL from "../../constant";
import { toast } from "react-toastify";

export const getLeadById = createAsyncThunk(
  "lead/getLeadById",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${BASE_URL}/gradx/lead/${id}`, config);

      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const editLead = createAsyncThunk(
  "gradx/editLead",
  async ({ id, formData }, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";

      const { data } = await axios.patch(
        `${BASE_URL}/gradx/lead/${id}`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      toast.success(data.message);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

export const submitLead = createAsyncThunk(
  "gradx/submitLead",
  async (id, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.patch(
        `${BASE_URL}/gradx/submit-lead/${id}`,
        {},
        config,
      );

      toast.success(data.message);
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  },
);

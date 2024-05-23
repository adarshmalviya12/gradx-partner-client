import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const backendURL = import.meta.env.VITE_BASE_URL;

export const getLeads = createAsyncThunk(
  "gradx/leads",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${backendURL}/gradx/leads`, config);

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

export const getAllLeads = createAsyncThunk(
  "gradx/all-leads",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(`${backendURL}/gradx/all-leads`, config);

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const createLead = createAsyncThunk(
  "gradx/createLead",
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
        `${backendURL}/gradx/create-lead`,
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
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getSubmittedLeads = createAsyncThunk(
  "gradx/getSubmittedLeads ",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/gradx/submitted-Leads`,
        config,
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getConvertedLeads = createAsyncThunk(
  "gradx/getConvertedLeads ",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/gradx/converted-Leads`,
        config,
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

export const getAllConvertedLeads = createAsyncThunk(
  "gradx/getAllConvertedLeads ",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("userToken") ?? "";
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };
      const { data } = await axios.get(
        `${backendURL}/gradx/all-converted-Leads`,
        config,
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        toast.error(error.response.data.message);
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  },
);

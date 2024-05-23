import { createSlice } from "@reduxjs/toolkit";
import {
  createLead,
  getAllConvertedLeads,
  getAllLeads,
  getConvertedLeads,
  getLeads,
} from "./leadAction";

const initialState = {
  isLoading: false,
  leadList: [],
  error: null,
  success: false,
};

const leadSlice = createSlice({
  name: "leads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get leads
    builder
      .addCase(getLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getLeads.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.leadList = payload.data.leads;
      })
      .addCase(getLeads.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get all leads

      .addCase(getAllLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getAllLeads.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.leadList = payload.data.leads;
      })
      .addCase(getAllLeads.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // create lead

      .addCase(createLead.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLead.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.leadList.push(payload.data.lead);
        state.success = true;
      })
      .addCase(createLead.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get converted leads by user

      .addCase(getConvertedLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getConvertedLeads.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.data);
        state.leadList = payload.data.convertedLeads;
      })
      .addCase(getConvertedLeads.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get converted leads by user

      .addCase(getAllConvertedLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getAllConvertedLeads.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.data);
        state.leadList = payload.data.convertedLeads;
      })
      .addCase(getAllConvertedLeads.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default leadSlice.reducer;

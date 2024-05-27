import { createSlice } from "@reduxjs/toolkit";
import {
  createLead,
  createLeadWithReferral,
  getAllConvertedLeads,
  getAllLeads,
  getAssignedLeads,
  getConvertedLeadsAssignedToEmployee,
  getLeads,
  getLeadsConvertedByLoggedInUser,
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

      // create lead

      .addCase(createLeadWithReferral.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createLeadWithReferral.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.leadList.push(payload.data.lead);
        state.success = true;
      })
      .addCase(createLeadWithReferral.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get assigned Leads leads by user

      .addCase(getAssignedLeads.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getAssignedLeads.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        console.log(payload.data);
        state.leadList = payload.data.leads;
      })
      .addCase(getAssignedLeads.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // get converted leads by user

      .addCase(getLeadsConvertedByLoggedInUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getLeadsConvertedByLoggedInUser.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          console.log(payload.data);
          state.leadList = payload.data.leads;
        },
      )
      .addCase(
        getLeadsConvertedByLoggedInUser.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      )

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
      })

      // get converted leads by assigned Employee

      .addCase(getConvertedLeadsAssignedToEmployee.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(
        getConvertedLeadsAssignedToEmployee.fulfilled,
        (state, { payload }) => {
          state.isLoading = false;
          console.log(payload.data);
          state.leadList = payload.data.leads;
        },
      )
      .addCase(
        getConvertedLeadsAssignedToEmployee.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload;
        },
      );
  },
});

export default leadSlice.reducer;

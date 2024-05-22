import { createSlice } from "@reduxjs/toolkit";
import { editLead, getLeadById, submitLead } from "./singleLeadActions";

const initialState = {
  isLoading: false,
  lead: null,
  error: null,
};

const singleLeadSlice = createSlice({
  name: "lead",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLeadById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getLeadById.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lead = payload.data.lead;
      })
      .addCase(getLeadById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // Edit a single Lead

      .addCase(editLead.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editLead.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lead = payload.data.updatedLead;
      })
      .addCase(editLead.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      // Submit Lead

      .addCase(submitLead.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(submitLead.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.lead = payload.data.lead;
      })
      .addCase(submitLead.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default singleLeadSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addFollowUps, getFollowUpsForUser } from "./followAction";

const initialState = {
  isLoading: false,
  followUps: [],
  error: null,
  success: false,
};

const followUpsSlice = createSlice({
  name: "followUps",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFollowUpsForUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getFollowUpsForUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.followUps = payload.data.followUps;
      })
      .addCase(getFollowUpsForUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // create course

      .addCase(addFollowUps.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addFollowUps.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.followUps.push(payload.data.createdFollowUp);
      })
      .addCase(addFollowUps.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default followUpsSlice.reducer;

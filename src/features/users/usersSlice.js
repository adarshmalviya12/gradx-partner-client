import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./usersAction";

const initialState = {
  isLoading: false,
  usersList: [],
  error: null,
  success: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.usersList = payload.data.users;
      })
      .addCase(getUsers.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default usersSlice.reducer;

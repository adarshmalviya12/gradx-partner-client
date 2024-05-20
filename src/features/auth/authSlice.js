import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUser, userLogin, userLogout } from "./authActions";

const initialState = {
  isLoading: false,
  userInfo: null,
  error: null,
  success: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Login user
    builder
      .addCase(userLogin.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(userLogin.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userInfo = payload.data.user;
        localStorage.setItem("userToken", payload.data.token);
      })
      .addCase(userLogin.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(userLogout, (state) => {
        state.isLoading = false;
        state.userInfo = null;
        state.error = null;
        localStorage.removeItem("persist:root");
        localStorage.removeItem("userToken");
      })

      // current user
      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCurrentUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.userInfo = payload.data;
      })
      .addCase(getCurrentUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default authSlice.reducer;

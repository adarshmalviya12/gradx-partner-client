import { createSlice } from "@reduxjs/toolkit";
import { createCourse, deleteCourse, getCourses } from "./courseAction";

const initialState = {
  isLoading: false,
  courseList: [],
  error: null,
  success: false,
};

const courseSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // get courses
      .addCase(getCourses.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })

      .addCase(getCourses.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.courseList = payload.data.courses;
      })
      .addCase(getCourses.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // create course

      .addCase(createCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createCourse.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.courseList.push(payload.data.course);
      })
      .addCase(createCourse.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })

      // delete user

      .addCase(deleteCourse.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteCourse.fulfilled, (state, { payload }) => {
        const deletedCourseId = payload.data.course._id;
        state.isLoading = false;
        state.courseList = state.courseList.filter(
          (course) => course._id !== deletedCourseId,
        );
      })
      .addCase(deleteCourse.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export default courseSlice.reducer;

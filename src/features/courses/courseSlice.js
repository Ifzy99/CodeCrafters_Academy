import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "./courseService";
import { extractErrorMessage } from "../../../utils";


const initialState = {
    courses:[],
    course:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "" 
}

// Fetch Courses
export const fetchCourses = createAsyncThunk('courses/fetchCourses', async (_, thunkAPI) => {
    try {
      const response =  await courseService.getCourses();
      return response.data
    } catch (error) {
      console.error('Error fetching courses:', error);
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  });

  export const courseSlice = createSlice ({
    name: "course",
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false;
            state.isError = false;
            state.isSuccess = false;
            state.message = ""
        }
        },

        extraReducers: (builder) => {
            builder
            .addCase(fetchCourses.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(fetchCourses.fulfilled, (state, action) => {
              console.log('Payload:', action.payload);
              state.isLoading = false;
              state.isSuccess = true;
              state.courses = action.payload;
            })
            .addCase(fetchCourses.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.message = action.payload;
            });
        }
})


export const {reset} = courseSlice.actions
export default courseSlice.reducer
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programmeService from "./programmeService"
import { extractErrorMessage } from "../../../utils";


const initialState = {
    programmes:null,
    programme:null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "" 
}

// Fetch Programmes
export const fetchProgrammes = createAsyncThunk('programmes/fetchProgrammes', async (_, thunkAPI) => {
    try {
      return await programmeService.getProgrammes();
    } catch (error) {
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  });


export const programmeSlice = createSlice ({
    name: "programme",
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
            .addCase(fetchProgrammes.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(fetchProgrammes.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.programmes = action.payload;
            })
            .addCase(fetchProgrammes.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.message = action.payload;
            });
        }
})


export const {reset} = programmeSlice.actions
export default programmeSlice.reducer
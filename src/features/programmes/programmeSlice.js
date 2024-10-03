import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import programmeService from "./programmeService"
import { extractErrorMessage } from "../../../utils";


const initialState = {
    programmes:[],
    programme:{},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "" 
}

// Fetch Programmes
export const fetchProgrammes = createAsyncThunk('programmes/fetchProgrammes', async (_, thunkAPI) => {
    try {
      const response =  await programmeService.getProgrammes();
      return response.data
    } catch (error) {
      console.error('Error fetching programmes:', error);
      return thunkAPI.rejectWithValue(extractErrorMessage(error));
    }
  });

  // Fetch Single Programme
export const fetchProgramme = createAsyncThunk('programmes/fetchProgramme', async (id, thunkAPI) => {
  try {
    const response = await programmeService.getProgramme(id);
    return response.data;
  } catch (error) {
    console.error('Error fetching programme:', error);
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
              console.log('Payload:', action.payload); // Log the payload
              state.isLoading = false;
              state.isSuccess = true;
              state.programmes = action.payload;
            })
            .addCase(fetchProgrammes.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.message = action.payload;
            })
            .addCase(fetchProgramme.pending, (state) => {
              state.isLoading = true;
            })
            .addCase(fetchProgramme.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              state.programme = action.payload;
            })
            .addCase(fetchProgramme.rejected, (state, action) => {
              state.isLoading = false;
              state.isError = true;
              state.message = action.payload;
            });
        }
})


export const {reset} = programmeSlice.actions
export default programmeSlice.reducer
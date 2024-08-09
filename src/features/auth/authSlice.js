import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";


const initialState = {
    student: null,
    isError: false,
    isSuccess: false,
    isLoading:false,
    message: "" 
}

// Register New Student 
export const register = createAsyncThunk("auth/register", async(student, thunkAPI) => {
    try {
        return await authService.register(student)
    }catch (error){
        console.error("Thunk error:", error);
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }

    
})

// Login Students 
export const login = createAsyncThunk("auth/login", async(student, thunkAPI) => {
    console.log(student);
    
})

export const authSlice = createSlice({
    name: 'auth',
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
        builder.addCase(register.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.student = action.payload
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.student = null
        })
    },
})

export const {reset} = authSlice.actions
export default authSlice.reducer
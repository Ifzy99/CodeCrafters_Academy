import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authService";
import { extractErrorMessage } from "../../../utils";


//Get student from localstorage
const user = JSON.parse(localStorage.getItem('user'));


const initialState = {
    user: user? user: null,
    isError: false,
    isSuccess: false,
    isLoading:false,
    message: "" 
}

// Register New User (Student/Staff)
export const registerStudent = createAsyncThunk("auth/registerStudent", async(user, thunkAPI) => {
    try {
        return await authService.registerStudent(user)
    }catch (error){
        console.error("Thunk error:", error);
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }

    
})

// Login User (Student/Staff)
export const loginStudent = createAsyncThunk("auth/loginStudent", async(user, thunkAPI) => {
    try {
        return await authService.loginStudent(user)
    }catch (error){
        console.error("Thunk error:", error);
        return thunkAPI.rejectWithValue(extractErrorMessage(error))
    }
})

//logout students
export const logout = createAsyncThunk("auth/logout", async() => {
    return await authService.logout()
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
        builder
        .addCase(registerStudent.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(registerStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(registerStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(loginStudent.pending, (state) =>{
            state.isLoading = true
        })
        .addCase(loginStudent.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.user = action.payload
        })
        .addCase(loginStudent.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.user = null
        })
        .addCase(logout.fulfilled, (state) => {
            state.user = null
        })
    },
})

export const {reset} = authSlice.actions
export default authSlice.reducer
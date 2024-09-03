import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import programmeReducer from "../features/programmes/programmeSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        programmes:programmeReducer,
    },
})



export default store
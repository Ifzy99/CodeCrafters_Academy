import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice"
import programmeReducer from "../features/programmes/programmeSlice"
import courseReducer from "../features/courses/courseSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        programmes:programmeReducer,
        courses:courseReducer,
    },
})



export default store
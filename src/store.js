import { configureStore } from "@reduxjs/toolkit";
import taskReducer from './Features/taskSlice'

export const store = configureStore({
    reducer: {
        taskSlice: taskReducer,
    }
})
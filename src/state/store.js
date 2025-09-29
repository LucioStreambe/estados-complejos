import { configureStore } from "@reduxjs/toolkit";
import paisReducer from "../features/paisSlice.js";

export const store = configureStore({
    reducer: paisReducer,
});
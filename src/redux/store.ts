import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slice/stateSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
export const store =configureStore({
    reducer:{
        title:stateSlice,
        Icon:stateSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for using dispatch and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
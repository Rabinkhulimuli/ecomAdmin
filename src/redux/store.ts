import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./slice/stateSlice"
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productApi from "./slice/productSlice";
export const store =configureStore({
    reducer:{
        title:stateSlice,
        Icon:stateSlice,
        [productApi.reducerPath]:productApi.reducer
    },
    middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat(productApi.middleware)
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Custom hooks for using dispatch and selector
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
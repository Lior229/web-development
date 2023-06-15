import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../components/ProductsArea/productsSlice";

const store = configureStore({
    reducer:{
        productsState: productReducer
    }
});

export type RootState = ReturnType <typeof store.getState>
export type Appdispatch = typeof store.dispatch

export default store;
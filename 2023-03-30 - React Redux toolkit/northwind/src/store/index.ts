import { configureStore } from '@reduxjs/toolkit';
import productsReducer from '../components/ProductsArea/productsSlice';

const store = configureStore({
    reducer: {
        productsState: productsReducer,
    }
});


//Infer the "RootState" and "AppDispatch" types from the store itself
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;

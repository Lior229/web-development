import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import Product from '../../models/Product';

interface ProductsState {
    products: Product[],
    product?: Product
}

const initialState:ProductsState = {
    products:[]
}

export const productSlice =  createSlice({
    name:'products',
    initialState: initialState,
    reducers:{
        setProducts:(state, action:PayloadAction<Product[]>) =>{

            state.products = action.payload;
        }
    }
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;
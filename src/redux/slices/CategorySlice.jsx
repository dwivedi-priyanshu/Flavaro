import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
    name: 'Category',
    initialState: 'ALL',
    reducers: {
      setCategory: (state, action) => action.payload
    },
  });
  
export const {setCategory} =CategorySlice.actions
export default CategorySlice.reducer
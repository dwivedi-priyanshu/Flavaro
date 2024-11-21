import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
    name: 'search',
    initialState:"",
    reducers:{
        setSearch:(state,action)=>action.payload
    }
})
export const {setSearch} = SearchSlice.actions;
export default SearchSlice.reducer;
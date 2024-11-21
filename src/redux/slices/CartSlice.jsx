import { createSlice } from "@reduxjs/toolkit";

export const CartSlice=createSlice({
    name: 'cart',
    initialState: [],
    reducers:{
        add:(state,action)=>{
            const existingItem=state.find(item=>item.id===action.payload.id);
            if(existingItem){
                existingItem.qty+=action.payload.qty;
            }
            else{
                state.push(action.payload)
            }
        },
        remove:(state,action)=>{ 
            return state.filter(item=>item.id !==action.payload)
        },
        incrementQty:(state,action)=>{
            const item=state.find(item=>item.id===action.payload.id);
            item.qty+=1;
        },
        decrementQty:(state,action)=>{
            const item=state.find(item=>item.id===action.payload.id);
            if(item.qty>1)
              item.qty-=1;
        },
    }
});

export const {add, remove,incrementQty,decrementQty} = CartSlice.actions;
export default CartSlice.reducer;

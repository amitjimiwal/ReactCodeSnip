import { createSlice } from "@reduxjs/toolkit";
const initialState={value:0};
export const counterSlice=createSlice({
      name:"counter",
      initialState:initialState,
      reducers:{
      incrementData:(state,action)=>{
          state.value++;
      },
      decrementData:(state,action)=>{
          state.value--;
      },
      addValue:(state,action)=>{
         state.value+=action.payload.value;
      }
      }
})

export const {incrementData,decrementData,addValue}=counterSlice.actions;

export default counterSlice.reducer;
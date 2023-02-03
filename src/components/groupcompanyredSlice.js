import { createSlice } from '@reduxjs/toolkit';
import React from 'react'



export const initialState={
  value:"",
};
export const groupcompanyredSlice=createSlice({
  name:"counter",
  initialState,
  reducers:
  {
    listeleme : (state,action) =>
    {
      console.log("burasi action     "+action);
      state.value=action.payload;
    },
  },

});
// function Groupcompany(props) {

//   return (
//     <div>

//        {props.group}

//     </div>
//   )
// }
export const {listeleme}=groupcompanyredSlice.actions; 
export default groupcompanyredSlice.reducer;

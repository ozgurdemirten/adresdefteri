import { configureStore } from '@reduxjs/toolkit';
import counter from '../groupcompanyredSlice'
export const store =configureStore({
    reducer:{
        counter:counter,
    },
});
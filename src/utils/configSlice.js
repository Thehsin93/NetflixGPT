import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
    name :'config',
    initialState:{
        lang:'en'
    },
    reducers:{
        setlanguage:(state,action)=>{
            state.lang = action.payload;
        }
    }
})

export const {setlanguage} =configSlice.actions;
export default configSlice.reducer;
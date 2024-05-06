import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name :'GPT',
    initialState :{
        showgptsearch:false,
        movieNames :null,
        movieResult:null
    },
    reducers :{
        togglegptserach:(state,action)=>{
            state.showgptsearch = !state.showgptsearch;
        },
        addMovieresult:(state,action)=>{
            const {movieNames,movieResult} = action.payload;
            state.movieNames = movieNames;
            state.movieResult = movieResult;
        }
    }
});

export const {togglegptserach,addMovieresult} = gptSlice.actions;
export default gptSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name:"Movies",
    initialState:{
        nowPlayingMovies : null,
        trailerVideo :null,
        popularMovies:null,
        topRated :null,
        upComing:null
    },
    reducers :{
        addNowPlayingMovies :(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.popularMovies= action.payload;
        },
        addUpComing:(state,action)=>{
            state.upComing=action.payload;
        },
        addTopRated:(state,action)=>{
            state.topRated = action.payload;
        }
    }

});

export default movieSlice.reducer
export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRated,addUpComing} =movieSlice.actions
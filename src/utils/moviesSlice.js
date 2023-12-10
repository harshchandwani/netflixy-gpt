import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: ["Temp 1", "Temp 2", "Temp 3"],
        popularMovies   : ["Temp 1", "Temp 2", "Temp 3"],
        topRatedMovies   : ["Temp 1", "Temp 2", "Temp 3"],
        onTheAir   : ["Temp 1", "Temp 2", "Temp 3"],
        trailerVideo: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addOnTheAir: (state, action) => {
            state.onTheAir = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addOnTheAir } = moviesSlice.actions;
export default moviesSlice.reducer;
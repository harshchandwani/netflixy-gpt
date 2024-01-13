import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const notifyFavourite = () => toast("Added to favourites");
const notifyFavouriteAlert = () => toast("Already in Favourites");
const notifyWatchlist = () => toast("Added to Watchlist");
const notifyWatchlistAlert = () => toast("Already in Watchlist");

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        popularMovies   : null,
        topRatedMovies   : null,
        onTheAir   : null,
        trendingMovies: null,
        trailerVideo: null,
        favourites: [], 
        watchList: [],
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
        addMovieDetail: (state, action) => {
            state.movieDetail = action.payload;
        },
        addTrendingMovies: (state, action) => {
            state.trendingMovies = action.payload;
        },
        addFavouriteMovie: (state, action) => {
            let find = state?.favourites?.findIndex(
              (movie) => movie.id === action.payload.id
            );
      
            if (find >= 0) {
              notifyFavouriteAlert();
            } else {
              state.favourites.push(action.payload);
              notifyFavourite();
            }
          },
          removeFavouriteMovie: (state, action) => {
            state.favourites = state.favourites.filter(
              (movie) => movie?.id !== action.payload
            );
          },
          addWatchlist: (state, action) => {
            let find = state?.watchList?.findIndex(
              (movie) => movie.id === action.payload.id
            );
      
            if (find >= 0) {
              notifyWatchlistAlert();
            } else {
              state.watchList.push(action.payload);
              notifyWatchlist();
            }
          },
          removeWatchlist: (state, action) => {
            state.watchList = state.watchList.filter(
              (movie) => movie?.id !== action.payload
            );
          },
    },
});

export const { 
    addNowPlayingMovies, 
    addTrailerVideo, 
    addPopularMovies, 
    addTopRatedMovies, 
    addOnTheAir, 
    addTrendingMovies,
    addFavouriteMovie,
    removeFavouriteMovie,
    addWatchlist,
    removeWatchlist,
} = moviesSlice.actions;
export default moviesSlice.reducer;
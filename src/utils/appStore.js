import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import configReducer from "./configSlice";
import moviePageReducer from "./moviePageSlice";
import pathReducer from "./pathSlice";
import credits from "./creditsSlice"
const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: moviesReducer,
            gpt: gptReducer, 
            credits: credits,
            config: configReducer, 
            moviePageDetails: moviePageReducer,
            path: pathReducer,
        },
    }
);
export default appStore;
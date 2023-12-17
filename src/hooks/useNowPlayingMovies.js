import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useNowPlayingMovies = () => {

    //fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);
    const getNowPlayingMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing', API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    };
    useEffect(()=>{
        !nowPlayingMovies && getNowPlayingMovies();
        //!nowPlayingMovies && getNowPlayingMovies
        
    }, [])
};

export default useNowPlayingMovies;
import { useDispatch, useSelector } from "react-redux";
import { addOnTheAir } from "../utils/moviesSlice"
import { API_OPTIONS } from "../utils/constants";
import { useEffect } from "react";
const useOnTheAir = () => {

    //fetch data from TMDB API and update store
    const dispatch = useDispatch();
    const onTheAir = useSelector((store) => store.movies.onTheAir);
    const getOnTheAir = async () => {
        const data = await fetch('https://api.themoviedb.org/3/tv/on_the_air', API_OPTIONS)
        const json = await data.json();
        // console.log(json);
        dispatch(addOnTheAir(json.results));
    };
    useEffect(()=>{
        !onTheAir && getOnTheAir();
    }, [])
};

export default useOnTheAir;
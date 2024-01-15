import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants';
import { addRecommendation } from '../utils/moviesSlice';

const useRecommendation = ({ movieId }) => {
    const dispatch = useDispatch();
    const getRecommendation = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" +
            movieId +
            "/recommendations?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addRecommendation(json.results));

    }

    useEffect(() => {
        getRecommendation();
        window.scrollTo(0,0);
    }, [movieId]);
}

export default useRecommendation
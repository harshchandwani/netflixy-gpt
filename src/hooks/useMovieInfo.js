import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/moviePageSlice";
// import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieInfo = (movieId) => {
    const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieDetail = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId, 
      API_OPTIONS
    );
    const json = await data.json();
    // const filterData = await json?.results?.filter((video) => video.type === "Trailer");
    // const trailer = await filterData?.length ? filterData?.[0] : json?.results?.[0];
    
    dispatch(addMovieDetails(json));
  };
  useEffect(() => {
    getMovieDetail();
  }, [movieId]);
}

export default useMovieInfo;
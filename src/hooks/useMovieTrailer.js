import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  // const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = await json?.results?.filter((video) => video.type === "Trailer");
    const trailer = await filterData?.length ? filterData?.[0] : json?.results?.[0];
    
    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    movieId && getMovieVideos();
  }, []);
};

export default useMovieTrailer;
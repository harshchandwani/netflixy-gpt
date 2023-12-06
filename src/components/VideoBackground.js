import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({ id }) => {
  const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  const dispatch = useDispatch()
  //fetch movie trailor
  
  // setMovieId(id);
  const getMovieVideo = async () => {
    const url = 'https://api.themoviedb.org/3/movie/1075794/videos?language=en-US'
    const data = await fetch(url, API_OPTIONS);
    const json = await data.json();
    
    console.log(json);


    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
    // console.log(trailer);
  }

  useEffect(() => {
    getMovieVideo();
  }, [])
  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/" + trailerVideo?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      >
      </iframe>
    </div>
  )
}

export default VideoBackground
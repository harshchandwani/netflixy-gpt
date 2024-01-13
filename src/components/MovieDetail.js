
import React from 'react'
import { useParams } from 'react-router-dom'
// import useMovieTrailer from '../hooks/useMovieTrailer';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
import useMovieInfo from '../hooks/useMovieInfo';
import VideoTitle from "./VideoTitle";

import SecondaryContainer from './SecondaryContainer';
import Header from './Header';
import Footer from './Footer';
const MovieDetail = () => {
    const { movieId } = useParams();
    useMovieInfo(movieId);
    const movie = useSelector((store) => store?.movies?.movieDetail);
    if(!movie){
      return;
    }
    const { title, overview} = movie;
    // console.log(movie)
  return (
    <div>
        {/* <Header /> */}
        <div className="pt-[30%] bg-black md:pt-0">
            <VideoTitle title= {title} overview = {overview}/>
            <VideoBackground movieId={movieId} />
        </div>
        <SecondaryContainer />
      <Footer />
    </div>

    
  )
}

export default MovieDetail
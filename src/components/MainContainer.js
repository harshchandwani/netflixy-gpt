import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);
    const mainMovie = movies[0];
    if(mainMovie === null){
        return;
    }
    console.log(mainMovie);
    const { original_title, overview, id } = mainMovie;
    // console.log(id);
    return ( 
        <div>
            <VideoBackground movieId = {id}/>
            <VideoTitle title= {original_title} overview = {overview}/>
        </div>
    )
}

export default MainContainer
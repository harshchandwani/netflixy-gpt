import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
    // console.log(movies);
    if(!movies){
      return null;
    }
    return (
    <div className='px-6'>
      <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
      <div className='flex overflow-x-scroll scrollbar-hide'>
        
        <div className='flex'>
            {movies?.map((movie) => (
              <Link key={movie?.id} to={"/movie/" + movie?.id}>
                <MovieCard key={movie.id} posterPath={movie.poster_path} />
              </Link>
            ))}
         </div>
      </div>
    </div>
  )
}

export default MovieList;
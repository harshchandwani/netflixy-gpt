import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({title, movies}) => {
    // console.log(movies[0]);

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
                <MovieCard
                    title={movie?.title}
                    movieId={movie?.id}
                    date={movie?.release_date}
                    rating={movie?.vote_average?.toFixed(1)}
                    poster_path={movie?.poster_path}
                  />
              </Link>
            ))}
         </div>
      </div>
    </div>
  )
}

export default MovieList;
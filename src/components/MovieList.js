import React from 'react'
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const visible = { opacity: 1, y: 0, transition: { duration: 0.5 } };

const MovieList = ({ title, movies }) => {
  // console.log(movies[0]);

  if (!movies) {
    return null;
  }
  return (
    <motion.article
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, transition: { duration: 1 } }}
      variants={{ visible: { transition: { staggerChildren: 0.3 } } }}>
      <div className='px-6'>
        <h1 className='text-lg md:text-3xl py-4 text-white'>{title}</h1>
        <div className='flex overflow-x-scroll scrollbar-hide'>

          <div className='flex'>
            {movies?.map((movie) => (
              <motion.h3
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible
                }}
              >
                <Link key={movie?.id} to={"/movie/" + movie?.id}>
                  <MovieCard
                    title={movie?.title}
                    movieId={movie?.id}
                    date={movie?.release_date}
                    rating={movie?.vote_average?.toFixed(1)}
                    poster_path={movie?.poster_path}
                  />
                </Link>
              </motion.h3>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default MovieList;
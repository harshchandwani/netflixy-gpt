import React from 'react'
import MovieList from './MovieList';
import { useSelector } from 'react-redux';
import { useRef } from "react";
import { useInView } from "framer-motion";

function Section({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref}>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"
        }}
      >
        {children}
      </span>
    </section>
  );
}

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
    
    if(!movies){
        return;
    }
  // console.log(movies.nowPlayingMovies);
  return (
    movies.nowPlayingMovies &&  ( 
      <div className='bg-black'>
        <div className=' mt-0 md:-mt-56 pl-4 md:pl-12 relative z-20'>
          <Section><MovieList title = {"Now Playing"} movies = {movies.nowPlayingMovies} /></Section>
          <Section><MovieList title={"Trending Now"} movies={movies.trendingMovies} /></Section>
          <Section><MovieList title = {"Top Rated"} movies = {movies.topRatedMovies} /></Section>
          <Section><MovieList title = {"Popular"} movies = {movies.popularMovies} /></Section>
          <Section><MovieList title = {"Upcoming Movie"} movies = {movies.nowPlayingMovies} /></Section>
          <Section><MovieList title = {"On The Air"} movies = {movies.onTheAir} /></Section>
        </div>
      </div>
  )
  )
}

export default SecondaryContainer;
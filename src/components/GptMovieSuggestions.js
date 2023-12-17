import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';
const GptMovieSuggestions = () => {
  const data = useSelector((store) => store.gpt);
  const {movieResults, movieNames} = data;
  if(!movieNames){
    return null;
    //add Shimmer
  }


  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-90">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggestions;
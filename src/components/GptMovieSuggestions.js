import React from 'react'
import { useSelector } from 'react-redux'

const GptMovieSuggestions = () => {
  const data = useSelector(store => store.gpt);
  const {movieResults, movieNames} = data;
  if(!movieNames){
    return null;
    //add Shimmer
  }


  return (
    <div className=''>

    </div>
  )
}

export default GptMovieSuggestions
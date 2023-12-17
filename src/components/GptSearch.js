import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundImage from "../images/backgroundImage.jpg"
const GptSearch = () => {
  return (
    <div>
       <div className=' -z-10 fixed'>
        <img
          src={backgroundImage}
          alt='Netflix bg'
        />
      </div>
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
  )
}

export default GptSearch
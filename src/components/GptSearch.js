import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import backgroundImage from "../images/backgroundImage.jpg"
const GptSearch = () => {
  return (
    <div>
       <div className=' -z-10 fixed'>
        <img
          className="w-screen h-screen object-cover"
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
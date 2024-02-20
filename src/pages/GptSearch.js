import React from 'react'
import GptSearchBar from '../components/GptSearchBar'
import GptMovieSuggestions from '../components/GptMovieSuggestions'
import backgroundImage from "../images/backgroundImage.jpg"
import { useDispatch } from 'react-redux'
import { addPath } from '../utils/pathSlice'
import Header from '../components/Header'
const GptSearch = () => {

  const pathname = window.location.pathname;
  const dispatch = useDispatch();
  dispatch(addPath(pathname));

  return (
    <div>
      <div className=' -z-10 fixed'>
        <img
          className="w-screen h-screen object-cover"
          src={backgroundImage}
          alt='Netflix bg'
        />
      </div>
      <Header />
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  )
}

export default GptSearch
import React from 'react'
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ key, posterPath }) => {
  if(!posterPath){
    return null;
  }
  return (
    <div className='w-36 md:w-48 pr-4' key={key}>
        <img alt="Movie Card" src={IMG_URL + posterPath} />
    </div>
  )
}

export default MovieCard;
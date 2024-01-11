import React from 'react';
import { IMG_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
  if (!posterPath) {
    return null;
  }

  return (
    <div className='w-36 md:w-48 pr-4 hover:transform hover:scale-110 hover:translate-y-[-5px] transition-transform'>
      <img alt="Movie Card" src={IMG_URL + posterPath} />
    </div>
  );
};

export default MovieCard;

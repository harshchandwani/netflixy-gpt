// NotFound.js

import React from 'react';
import backgroundImage from "../images/backgroundImage.jpg"
const NotFound = () => {
  return (
    <div>
        <div className='absolute'>
            <img
            className="w-screen h-screen object-cover"
            src={backgroundImage}
            alt='Netflix bg'
            />
        </div>
        <div className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1>404 - Not Found</h1>
            <p>Sorry, the page you are looking for might be in another castle.</p>
        </div>
    </div>
  );
};

export default NotFound;

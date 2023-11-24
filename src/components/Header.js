import React from 'react';

const Header = () => {
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className='w-44 mx-auto md:mx-0'
        src='https://github.com/devandres-tech/Netflix-Clone/blob/master/src/static/images/Netflix_Logo_RGB.png?raw=true'
        alt='Netflix Logo'
      />
    </div>
  );
};

export default Header;
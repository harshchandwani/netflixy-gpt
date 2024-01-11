import React from 'react';

const Shimmer = () => {
  // CSS-in-JS style object for the shimmer effect
  const shimmerStyle = {
    animation: 'pulse 1.5s infinite',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, #eee 25%, #ddd 50%, #eee 75%)',
    backgroundSize: '200% 100%',
  };

  return (
    <div className='w-36 md:w-48 pr-4 animate-pulse' style={shimmerStyle}></div>
  );
};

export default Shimmer;

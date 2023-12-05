import React from 'react'

const VideoTitle = ({title, overview}) => {
    console.log({title});

  return (
    <div className='pt-36 px-12'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <h2 className='py-6 text-lg w-1/4'>{overview}</h2>
        <div className=''>
            <button className=' m-5 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-md'>▶ Play</button>
            <button className='m-5 bg-gray-500 text-white p-4 px-16 text-xl bg-opacity-50 rounded-md'> ➕ My List</button>
        </div>
    </div>
  )
}

export default VideoTitle;
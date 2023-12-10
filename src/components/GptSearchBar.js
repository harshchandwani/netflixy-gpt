import React from 'react'
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchPlaceholder = lang[language].gptSearchPlaceholder;
  const buttonText = lang[language].search;
  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' w-1/2 bg-black grid grid-cols-12'>
        <input 
            type='text' 
            className='p-4 m-4 col-span-10' 
            placeholder= {searchPlaceholder}
        />
        <button 
            className='m-4 py-2 px-4 bg-red-700 text-white rounded-lg col-span-2'>
            {buttonText}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
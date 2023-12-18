import React, { useRef } from 'react'
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from "../utils/gptSlice"
const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchPlaceholder = lang[language].gptSearchPlaceholder;
  const buttonText = lang[language].search;
  const searchText = useRef(null);
  const dispatch = useDispatch();
  //search movie in TMDB 
  const searchMovieTMDB = async (movie) => {
    const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+
    movie
    + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    const json = await data.json();
    return json.results;
  }
  const handleGptSearchClick = async () => {
    // console.log(searchText.current.value)
    //Make a call to GPT API
    //Store 
    const gptQuery = "Act as a Movie recommendation system and suggest some movies for the query: " + searchText.current.value + ". Only give me names  of 5 movies, comma separated like the example result given ahead. Example Result: Gadar, Sholay, Don, Koi mil gya"


    
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    if(!gptResults.choices){
      //TODO: Write Error Handling
      // console.log("GPT is not Working");
      // alert("GPT is not working");
    }
    // console.log(gptResults.choices?.[0]?.message?.content);
     // "Hera Pheri, Golmaal: Fun Unlimited, Andaz Apna Apna, Chupke Chupke, 3 Idiots"
    const gptMovieList = gptResults.choices?.[0]?.message?.content.split(",");
    gptMovieList.unshift(searchText.current.value);
    //extract gptMovieList to array in order to access it more correctly

    // console.log(gptMovieList);
    //for each movie i will seach TMDB API
    const promiseArray = gptMovieList?.map((movie) => (searchMovieTMDB(movie)));
    //will recieve a promise for each call, as javascript waits for none => promise array
    const tmdbResults = await Promise.all(promiseArray);
    // tmdbResults.unshift(searchText.current.value)
    //this will recieve all the promise array and resolve them
    // and when all the promise will be resolved it will return the array to tmdb array
    // console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovieList, movieResults: tmdbResults }));
    
  }
  return (
    <div className='pt-[35%] md:pt-[10%] flex justify-center'>
      <form className=' w-full md:w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input 
            ref={searchText}
            type='text' 
            className='p-4 m-4 col-span-9' 
            placeholder= {searchPlaceholder}
        />
        <button 
            className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
            onClick={handleGptSearchClick}
            >
            {buttonText}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar;
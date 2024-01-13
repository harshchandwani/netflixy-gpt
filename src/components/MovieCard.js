import React from "react";
import { IMG_URL } from '../utils/constants';
import CircularRatingBar from "./CircularRatingBar";
import dayjs from "dayjs";
// import CancelIcon from "@mui/icons-material/Cancel";
// import { useDispatch, useSelector } from "react-redux";
// import { addMovieClicked } from "../utils/slices/moviePageSlice";
// import { useParams } from "react-router-dom";
// import { removeFavouriteMovie } from "../utils/slices/moviesSlice";

const MovieCard = ({
  title,
  movieId,
  date,
  rating,
  poster_path,
  textColor,
  bgColor,
}) => {
  // const path = useSelector((store) => store.path.path);
  // const dispatch = useDispatch();

  // const removeFavourite = () => {
  //   dispatch(removeFavouriteMovie(movieId));
  // };

  if (!poster_path) return null;
  return (
    <div className="transition hover:-translate-y-1 ">
      <div
        className={`w-[130px] md:w-[180px] ${bgColor}  m-2 cursor-pointer rounded-lg relative shadow-md `}
      >
        <img
          className="rounded-t-lg"
          alt="movie card"
          src={IMG_URL + poster_path}
        />
        <div className="relative left-1 bottom-4 md:left-2 md:bottom-8 w-8 md:w-14 bg-gray-900 rounded-full ">
          <CircularRatingBar rating={rating.at()} />
        </div>
        <h3
          className={`text-cyan-50 bottom-4 px-2 relative md:bottom-7 md:left-2 text-sm md:text-base line-clamp-1`}
        >
          {title}
        </h3>
        <p
          className={`text-cyan-100 bottom-4 px-2 text-xs md:text-base relative md:bottom-7 md:left-2`}
        >
          {dayjs(date).format("MMM D, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default MovieCard;

// import React from 'react';
// import { IMG_URL } from '../utils/constants';

// const MovieCard = ({ posterPath }) => {
//   if (!posterPath) {
//     return null;
//   }

//   return (
//     <div className='w-36 md:w-48 pr-4 hover:transform hover:scale-110 hover:translate-y-[-5px] transition-transform'>
//       <img alt="Movie Card" src={IMG_URL + posterPath} />
//     </div>
//   );
// };

// export default MovieCard;

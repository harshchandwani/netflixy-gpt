import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import useMovieInfo from "../hooks/useMovieInfo";
import useMovieTrailer from "../hooks/useMovieTrailer";
import { addPath } from "../utils/pathSlice";
import { addMovieClicked } from "../utils/moviePageSlice";
import TopContainer from "../components/TopContainer";
import Shimmer from "../components/Shimmer";
import Header from "../components/Header";
import BottomContainer from "../components/BottomContainer";
const MovieDetail = () => {
  const movieId = useParams();
  const dispatch = useDispatch();
  useMovieInfo(movieId.movieId);
  const details = useSelector((store) => store?.moviePageDetails);
  useMovieTrailer(details?.movieDetails?.id);
  // console.log(details);

  const clickedMovieId = useSelector(
    (store) => store.moviePageDetails?.movieClicked
  );

  const pathname = window.location.pathname.slice(7);

  useEffect(() => {
    window.scrollTo(0,0);
    dispatch(addPath(window.location.pathname.slice(0,6)));
    dispatch(addMovieClicked(pathname));
  }, [movieId]);


  return details.movieDetails === null ||
  details?.movieDetails?.id != clickedMovieId ? (
    <Shimmer />
  ) : (
    <div className="">
      <Header />
      <TopContainer />
      <div className="bg-black">
        <BottomContainer />
      </div>
      
    </div>
  );
}
export default MovieDetail;

// import React from 'react'
// import { useParams } from 'react-router-dom'
// // import useMovieTrailer from '../hooks/useMovieTrailer';
// import VideoBackground from './VideoBackground';
// import { useSelector } from 'react-redux';
// import useMovieInfo from '../hooks/useMovieInfo';
// import VideoTitle from "./VideoTitle";

// import SecondaryContainer from './SecondaryContainer';
// import Header from './Header';
// import Footer from './Footer';
// const MovieDetail = () => {
//     const { movieId } = useParams();
//     useMovieInfo(movieId);
//     const movie = useSelector((store) => store?.movies?.movieDetail);
//     if(!movie){
//       return;
//     }
//     const { title, overview} = movie;
//     // console.log(movie)
//   return (
//     <div>
//         {/* <Header /> */}
//         <div className="pt-[30%] bg-black md:pt-0">
//             <VideoTitle title= {title} overview = {overview}/>
//             <VideoBackground movieId={movieId} />
//         </div>
//         <SecondaryContainer />
//       <Footer />
//     </div>

    
//   )
// }

// export default MovieDetail
import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useOnTheAir from '../hooks/useOnTheAir';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTrendingMovies from '../hooks/useTrendingMovies';
const Browse = () => {
  const showGptSearch = useSelector(store => store.gpt.showGptSearch);

  useNowPlayingMovies();
  useTrendingMovies();  
  usePopularMovies();
  useTopRatedMovies();
  useOnTheAir();
  return (
    <div>
      <Header />
      {
        showGptSearch ? (
        <GptSearch />
        ) : (
          <>
            <MainContainer/>
            <SecondaryContainer />
          </>
        )
      }
          
      {/* 
        Main Container
          - Video Background
          - Video Title
        Secondary Container
          - Movies List * n
          - Cards * n
      */}

    </div>
  );
};

export default Browse;
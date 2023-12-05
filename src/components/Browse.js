import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
  useNowPlayingMovies();  
  return (
    <div>
      <Header />
      {/* 
        Main Container
          - Video Background
          - Video Title
        Secondary Container
          - Movies List * n
          - Cards * n
      */}

      <MainContainer/>
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
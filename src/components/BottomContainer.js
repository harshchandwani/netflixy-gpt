import useCredit from '../hooks/useCredits';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CastCard from './CastCard';
import useRecommendation from '../hooks/useRecommendation';
import MovieList from "./MovieList";
const BottomContainer = () => {
    const movieId = useParams();
    useCredit(movieId);
    useRecommendation(movieId);

    const cast = useSelector((store) => store.credits.cast);
    const recommended = useSelector((store) => store.movies.recommended);
    
    return (
        <div>
            <h3 className="font-semibold text-2xl text-white">Top Billed Cast</h3>
            <div className="pt-2 flex overflow-x-scroll no-scrollbar scroll-smooth scrollbar-hide">
                {cast?.cast?.map((cast) => (
                    <CastCard
                        key={cast?.id}
                        img_path={cast?.profile_path}
                        name={cast?.name}
                        character={cast?.character}
                    />
                ))}
            </div>
            {recommended.length !== 0 && (
                <div className="overflow-x-scroll no-scrollbar scroll-smooth scrollbar-hide">
                    <MovieList
                        title={"Recommended"}
                        movies={recommended}
                    />
                </div>
            )}
        </div>

    )
}

export default BottomContainer
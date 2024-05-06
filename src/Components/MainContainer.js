import BackgroundMovie from "./BackgroundMovie";
import MovieTitle from "./MovieTitle";
import { useSelector } from "react-redux";

const MainContainer = ()=>{

    const MovieList = useSelector(store=>store?.movies?.nowPlayingMovies);
    if(!MovieList)
        return;

    const mainmovie = MovieList[0];
    const {original_title,overview,id} = mainmovie;

    return <div className="pt-[30%] md:pt-0 bg-black">
        <MovieTitle title={original_title} overview={overview}/>
        <BackgroundMovie movieId = {id}/>
        
    </div>
};

export default MainContainer;
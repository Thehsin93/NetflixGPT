import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useUpComing from "../Hooks/useUpComing";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
const Browse = ()=>{

  
    useNowPlayingMovies();
    useUpComing();
    usePopularMovies();
    useTopRated();

    return <div>

        <Header></Header>
        <MainContainer/>
        <SecondaryContainer/>
       
        
    </div>
};
export default Browse
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import useNowPlayingMovies from "../Hooks/useNowPlayingMovies";
import useUpComing from "../Hooks/useUpComing";
import usePopularMovies from "../Hooks/usePopularMovies";
import useTopRated from "../Hooks/useTopRated";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";
const Browse = ()=>{
    
   
   const showgptsearch = useSelector(store=>store.gpt.showgptsearch);
  
    useNowPlayingMovies();
    useUpComing();
    usePopularMovies();
    useTopRated();

    return <div>

        <Header></Header>
        {showgptsearch?<GPTSearch/>:<><MainContainer/>
        <SecondaryContainer/></>
        }
        
       
        
    </div>
};
export default Browse
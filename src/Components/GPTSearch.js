import GPTSearchBar from "./GPTSearchBar";
import GPTMoviesSuggestions from "./GPTMovieSuggestions";
import { bgimage } from "../utils/constants";

const GPTSearch =()=>{
    return <><div className="fixed -z-10">
          <img className="h-screen object-cover w-screen" src={bgimage}
        alt = "bgimage"></img>
        </div>
         <div className="">
  
        <GPTSearchBar/>
<GPTMoviesSuggestions/>
        </div>

    
    </>
}

export default GPTSearch
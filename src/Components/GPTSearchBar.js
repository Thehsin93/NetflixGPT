import { useRef } from "react"
import lang from "../utils/languageConstants"
import { useDispatch, useSelector} from "react-redux"
import OpenAI from 'openai';
import { API_options } from "../utils/constants"
import {addMovieresult} from "../utils/gptSlice"
const GPTSearchBar = ()=>{
    const gptKey = useRef();
    const searchtext = useRef(null);
    const dispatch = useDispatch();
    const SearchMovie = async(movie)=>{
        const result = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_options)
        const data = await result.json();
        return data.results;
    }
    const handlegptsearch=async()=>{
        const openai = new OpenAI({
   
            apiKey:gptKey.current.value, 
            dangerouslyAllowBrowser:true// This is the default and can be omitted
          });
        const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchtext.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
        const gptresult = await openai.chat.completions.create({
            messages: [{ role: 'user', content: gptQuery}],
            model: 'gpt-3.5-turbo',
          });
          const gptmovies = gptresult.choices?.[0].message?.content.split(",");
          const promisearray = gptmovies.map((movie)=>SearchMovie(movie));
          const tmdbResults = await Promise.all(promisearray);
          dispatch(addMovieresult({movieNames:gptmovies,movieResult: tmdbResults}));
    }

    
    const langkey = useSelector(store=>store.config.lang);
    return <div className="pt-[35%] md:pt-[10%] flex justify-center">
        <form className="w-full md:w-3/4 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input type="text" ref={gptKey} className="p-4 m-4 col-span-5" placeholder={lang[langkey].apiPlaceholder}>

        </input>
            <input type="text" ref={searchtext} className="p-4 m-4 col-span-5" placeholder={lang[langkey].gptSearchPlaceholder}>

            </input>
            <button className="col-span-2 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handlegptsearch}>{lang[langkey].search}</button>
        </form>
    </div>
}

export default GPTSearchBar
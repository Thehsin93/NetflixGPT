import MovieList from "./MovieList";
import { useSelector } from "react-redux";
const SecondaryContainer = ()=>{

  const movies = useSelector((store)=>store.movies);
  console.log(movies);

    return <div className="bg-black">
         <div className="mt-0 md:-mt-64 pl-4 md:pl-12 relative z-20">
       <MovieList title="Now Playing Movies" movies={movies.nowPlayingMovies}/>
       <MovieList title="Popular Movies" movies={movies.popularMovies}/>
       <MovieList title="Top Rated Movies" movies={movies.topRated}/>
       <MovieList title="Upcoming Movies" movies={movies.upComing}/>
       </div>
    </div>
};


export default SecondaryContainer
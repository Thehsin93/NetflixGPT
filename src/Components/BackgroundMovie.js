import { useDispatch, useSelector } from "react-redux"
import { API_options } from "../utils/constants"
import { useEffect } from "react"
import { trace } from "firebase/performance"
import { addTrailerVideo } from "../utils/movieSlice"
import useMovieTrailer from "../Hooks/useMovieTrailer"
const BackgroundMovie =({movieId})=>{
  
    const trailervideo = useSelector((store)=>store.movies?.trailerVideo);
    useMovieTrailer(movieId);
  
    return <div className="w-screen">
        <iframe 
        className="w-screen aspect-video" 
        src={"https://www.youtube.com/embed/XeDbyVODQ5M?si="+trailervideo?.key+"?&autoplay=1&mute=1"} 
        title="YouTube video player"  
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin">
        </iframe>
    </div>
}

export default BackgroundMovie
import { tmdb_url } from "../utils/constants"
const MovieCard = ({posterPath})=>{
    if(!posterPath)
        return null;
    return <div className="w-36 md:w-48 pr-4">
        <img alt="moviecarrd" src = {tmdb_url+posterPath} className="w-48"></img>
    </div>
}
export default MovieCard
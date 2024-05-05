import { tmdb_url } from "../utils/constants"
const MovieCard = ({posterPath})=>{
    return <div className="w-32 pr-4">
        <img alt="moviecarrd" src = {tmdb_url+posterPath} className="w-48"></img>
    </div>
}
export default MovieCard
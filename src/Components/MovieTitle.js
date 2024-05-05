const MovieTitle = ({title,overview})=>{
    return <div className="w-screen aspect-video pt-[20%] px-24 absolute bg-gradient-to-r from-black text-white">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="text-lg py-5 w-1/4">{overview}</p>
        <div className="flex">
            <button className="bg-white  px-8 py-1 rounded-lg opacity-1 text-black hover:opacity-80">⏯️ Play</button>
            <button className="bg-white px-8 py-1 rounded-lg opacity-1 mx-2 text-black hover:opacity-80">More Info</button>
        </div>
    </div>
};
export default MovieTitle
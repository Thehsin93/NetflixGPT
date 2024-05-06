const MovieTitle = ({title,overview})=>{
    return <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute bg-gradient-to-r from-black text-white">
        <h1 className="font-bold text-2xl">{title}</h1>
        <p className="hidden md:inline-block text-lg py-5 w-3/4 md:w-1/4">{overview}</p>
        <div className="flex my-1">
            <button className="bg-white  px-8 py-1 rounded-lg opacity-1 text-black hover:opacity-80">⏯️ Play</button>
            <button className="bg-white px-8 py-1 rounded-lg opacity-1 mx-2 text-black hover:opacity-80">More Info</button>
        </div>
    </div>
};
export default MovieTitle
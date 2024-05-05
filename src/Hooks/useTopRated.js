import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_options } from "../utils/constants";
import { addTopRated } from "../utils/movieSlice";

const useTopRated = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const topRated = useSelector(
    (store) => store.movies.topRated
  );

  const getTopRated = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    dispatch(addTopRated(json.results));
  };

  useEffect(() => {
    !topRated && getTopRated();
  }, []);
};

export default useTopRated
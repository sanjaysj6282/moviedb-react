import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList() {
  const [result, setResult] = useState();

  const moviesList = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en"
    );
    let parsedData = await response.json();
    setResult(parsedData.results);

    console.log(result);
  };

  useEffect(() => {
    moviesList();
  
  },);
  

  return (
    <div> 
      {/* {result.map(movie =>{
        // <MovieItem/>
        })} */}
    </div>
  );
}

export default MovieList;

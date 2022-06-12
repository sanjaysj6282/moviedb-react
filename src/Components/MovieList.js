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

    console.log(result[0].original_title);
  };

  useEffect(() => {
    moviesList();
  });

  return (
    <div className="container my-3">
      <h1>Movie Recommendations</h1>
      <div className="row">
        {result.map((movie) => {
          return (
            <div className="col-md-4" key={movie.results}>
              <MovieItem title={movie.original_title} desc={movie.overview} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;

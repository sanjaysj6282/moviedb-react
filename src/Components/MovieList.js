import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList() {
  let imgInitial = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);

  const moviesList = async () => {
    let response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en"
    );
    let parsedData = await response.json();
    setMovies(parsedData.results);

    console.log(movies[0].original_title);
  };

  useEffect(() => {
    moviesList();
  });

  return (
    <div className="container my-3">
      <h1 style={{ margin: "25px" }}>Movie Recommendations</h1>

      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-md-4" key={movie.id}>
              <MovieItem
                title={movie.original_title}
                desc={movie.overview.slice(0, 157)+"..."}
                img={imgInitial.concat("/", movie.poster_path)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;

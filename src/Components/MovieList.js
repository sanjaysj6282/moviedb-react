import React, { useState, useEffect } from "react";
import MovieItem from "./MovieItem";

function MovieList(props) {
  let imgInitial = "https://image.tmdb.org/t/p/w500";
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moviesList = async () => {
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${props.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    // console.log(parsedData.page);
    setMovies(parsedData.results);
  };

  useEffect(() => {
    moviesList();
  }, []);

  const handlenextClick = async () => {
    // console.log("next click");
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${
      props.apiKey
    }&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${
      page + 1
    }&with_watch_monetization_types=flatrate`;
    let response = await fetch(apiUrl);
    setPage(page + 1);
    // console.log(page);
    let parsedData = await response.json();
    // console.log(parsedData.page);
    setMovies(parsedData.results);
  };

  const handlepreviousClick = async () => {
    // console.log("previous click");
    let apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=false&page=${
      page - 1
    }&with_watch_monetization_types=flatrate`;
    let response = await fetch(apiUrl);
    setPage(page - 1);
    // console.log(page);
    let parsedData = await response.json();
    // console.log(parsedData.page);
    setMovies(parsedData.results);
  };

  return (
    <div className="container my-3">
      <h1 style={{ margin: "25px" }}>Movie Recommendations</h1>

      <div className="row">
        {movies.map((movie) => {
          return (
            <div className="col-md-3 my-3" key={movie.id}>
              <MovieItem
                id={movie.id}
                title={movie.original_title}
                desc={movie.overview.slice(0, 157) + "..."}
                img={imgInitial.concat("/", movie.poster_path)}
                releasedate={movie.release_date}
                popularity={movie.vote_average}
              />
            </div>
          );
        })}
      </div>

      <div
        className="d-flex justify-content-between"
        style={{ margin: "50px" }}
      >
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlepreviousClick}
          disabled={page < 2}
        >
          Previous
        </button>
        <button
          type="button"
          className="btn btn-dark"
          onClick={handlenextClick}
          disabled={page > 5}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default MovieList;

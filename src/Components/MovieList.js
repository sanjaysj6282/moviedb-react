import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MovieItem from "./MovieItem";

function MovieList(props) {
  let location = useLocation();
  // console.log(location.state);

  let imgInitial = "https://image.tmdb.org/t/p/w500";
  let iniUrl = "https://api.themoviedb.org/3";
  let displayUrl = iniUrl + "/discover/movie?api_key=";
  let searchURl =
    iniUrl +
    `/search/movie?api_key=${props.apiKey}&language=en-US&query=${
      location.state ? location.state.query : ""
    }}&page=1&include_adult=false`;
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const moviesList = async () => {
    let apiUrl;
    if (location.state) {
      if ((location.state.type = "Search")) {
        apiUrl = searchURl;
      }
    } else {
      apiUrl =
        displayUrl +
        `${props.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;
    }
    // console.log("inside fn " + location.state);
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    // console.log(parsedData.page);
    setMovies(parsedData.results);
    // console.log(movies);
  };

  useEffect(() => {
    moviesList();
  }, [location.state]);

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
      <h1 style={{ margin: "25px", marginTop: "85px" }}>
        Movie Recommendations
      </h1>

      <div className="row">
        {movies.length > 0 ? (
          movies.map((movie) => {
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
          })
        ) : (
          <div className="container" style={{ marginTop: "10%" }}>
            <h2>No such movies</h2>
          </div>
        )}
      </div>

      {/* Either there are no movies or if its a search then dont do next and prev */}
      {movies.length > 0 && !location.state && (
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
      )}
    </div>
  );
}

export default MovieList;

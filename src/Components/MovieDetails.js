import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  const location = useLocation();
  const [moviedetails, setMoviedetails] = useState([]);
  const movieDetails = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${location.state.movieid}?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en-US`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setMoviedetails(parsedData);
    console.log(parsedData);
  };

  useEffect(() => {
    movieDetails();
  });

  return (
    <div>
        <h1>{moviedetails.original_title}</h1>
      <h2>It the movie details</h2>
    </div>
  );
}

export default MovieDetails;

import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails() {
  let imgInitial = "https://image.tmdb.org/t/p/w500";
  let img;
  const loc = useLocation();
  const [moviedetails, setMoviedetails] = useState([]);

  const movieDetails = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${loc.state.movieid}?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en-US`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setMoviedetails(parsedData);
    img = imgInitial.concat("/", parsedData.poster_path);
    console.log({ img });
  };

  useEffect(() => {
    movieDetails();
  });

  return (
    <>
      <div
        className="background"
        style={{
          position: "absolute",
          width: "100%",
          height: "92%",
          backgroundColor: "#202020",
        }}
      >
        <div className="main area" style={{ color: "#FFFFFF" }}>
          <div
            className="d-flex justify-content-around"
            style={{ margin: "40px" }}
          >
            <h1>{moviedetails.original_title}</h1>
            <div className="d-flex justify-content-between">
              <div className="rating">
                <h5>IMDB rating</h5>
                <span>
                  <h5>{moviedetails.vote_average}</h5>
                </span>
              </div>
              <div className="popularity">
                <h5>Popularity</h5>
                <h5>{moviedetails.popularity}</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="main area" style={{ color: "#FFFFFF" }}>
          <div className="d-flex justify-content-around">
            <img src="https://image.tmdb.org/t/p/w500//6DrHO1jr3qVrViUO6s6kFiAGM7.jpg" class="img-thumbnail" alt="..." />
            <div className="text">
              Add title, overview, resize image and wrap properly
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

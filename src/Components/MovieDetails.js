import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails(props) {
  const loc = useLocation();
  const img = loc.state.imgposter;
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState();
  let e1 = "ghj";

  const movieDetails = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${loc.state.movieid}?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en-US`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setDetails(parsedData);
    setGenres(parsedData.genres);
    // console.log(genres[1].name);
    // console.log(parsedData);
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
          height: "91%",
          backgroundColor: "#202020",
        }}
      >
        <div className="main area" style={{ color: "#FFFFFF" }}>
          <div
            className="d-flex justify-content-around"
            style={{ margin: "35px" }}
          >
            <h1>{details.original_title}</h1>
            <div className="d-flex justify-content-between gap-4">
              <div className="rating">
                <h5>IMDB rating</h5>
                <span>
                  <h5>{details.vote_average}</h5>
                </span>
              </div>
              <div className="popularity">
                <h5>Popularity</h5>
                <h5>{details.popularity}</h5>
              </div>
            </div>
          </div>
          <div className="d-flex" style={{ margin: "0 13em 0 18%" }}>
            <div className="p-2 w-100">
              <img
                src={img}
                width="270"
                height="380"
                className="img-thumbnail"
                alt="..."
              />
            </div>
            <div className="p-4 flex-shrink-1">
              {details.overview}
              <br />
              <br />
              <div className="d-flex justify-content-center gap-2">
                <span
                  type="badge rounded-pill text-bg-dark"
                  className="btn btn-dark"
                >
                  {genres[0].name}
                </span>
                <span
                  type="badge rounded-pill text-bg-dark"
                  className="btn btn-dark"
                >
                  {genres[1].name}
                </span>
                <span
                  type="badge rounded-pill text-bg-dark"
                  className="btn btn-dark"
                >
                  {genres[2].name}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

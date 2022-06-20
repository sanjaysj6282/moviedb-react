import React from "react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function MovieDetails(props) {
  const loc = useLocation();
  const img = loc.state.imgposter;
  const [details, setDetails] = useState([]);
  const [genres, setGenres] = useState();
  const [procompanies, setProcompanies] = useState();

  const movieDetails = async () => {
    const apiUrl = `https://api.themoviedb.org/3/movie/${loc.state.movieid}?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en-US`;
    let response = await fetch(apiUrl);
    let parsedData = await response.json();
    setDetails(parsedData);
    setGenres(parsedData.genres);
    setProcompanies(parsedData.production_companies);
    // console.log(genres[1].name);
    // console.log(genres);
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
          height: "100%",
          backgroundColor: "#202020",
        }}
      >
        <div className="main area" style={{ color: "#FFFFFF", marginTop: "90px"  }} >
          <div
            className="d-flex justify-content-around"  
          >
            <h1 style={{magrinTop: "20px"}}>{details.original_title}</h1>
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
          <br />
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
            <div className="p-4 flex-shrink-1 ">
              {details.overview}
              <br />
              <br />
              <div className="d-flex justify-content-center gap-2">
                {genres?.map((gen) => {
                  return (
                    <span
                      type="badge rounded-pill text-bg-dark"
                      className="btn btn-dark"
                    >
                      {gen.name}
                    </span>
                  );
                })}
              </div>
              <br />
              <br />
              <div className="d-flex container">
                <div className="p-2 flex-fill">Homepage</div>
                <div className="p-2 flex-fill">
                  <a href={details.homepage} target="_blank" rel="noreferrer">
                    {details.homepage}
                  </a>
                </div>
              </div>
              <div className="d-flex">
                <div className="p-2 flex-fill">Production companies</div>
                <div className="p-2 flex-fill">
                  {procompanies?.map((company) => {
                    return (
                      <span type="badge rounded-pill text-bg-dark gap-4">
                        {company.name.concat(", ")}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;

import React from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";

function MovieItem(props) {
  let defaultImg =
    "https://image.tmdb.org/t/p/w500//teCy1egGQa0y8ULJvlrDHQKnxBL.jpg";
  // console.log(props.img);
  return (
    <div>
      <div className="card">
        <span
          className="position-absolute top-0 translate-middle badge rounded-pill bg-success"
          style={{ left: "95%" }}
        >
          {props.popularity}
        </span>
        {props.img.substring(props.img.length - 4, props.img.length) !==
        "null" ? (
          <img src={props.img} className="card-img-top" alt="Img not found" />
        ) : (
          <img
            src={defaultImg}
            className="card-img-top"
            alt="Img not found"
          />
        )}
        {/* {print()} */}
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">
            <small className="text-muted">
              Release date: {props.releasedate}
            </small>
          </p>
          <Link
            className="btn btn-dark"
            to={`/movie_details/${props.title}`}
            state={{
              movieid: props.id,
              imgposter:
                props.img.substring(props.img.length - 4, props.img.length) !==
                "null"
                  ? props.img
                  : defaultImg,
            }}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

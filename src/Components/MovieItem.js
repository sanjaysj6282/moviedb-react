import React from "react";

function MovieItem(props) {
  return (
    <div>
      <div className="card">
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-success" style={{left:"95%"}}>
          {props.popularity}
        </span>
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.desc}</p>
          <p className="card-text">
            <small className="text-muted">
              Release date: {props.releasedate}
            </small>
          </p>
          <a href="/" target="__blank" className="btn btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

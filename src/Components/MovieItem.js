import React from "react";

function MovieItem(props) {
  return (
    <div>
      <div className="card">
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">
            {props.desc}
          </p>
          <a href="#" target="__blank" className="btn btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

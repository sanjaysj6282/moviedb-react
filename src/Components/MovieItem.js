import React from "react";

function MovieItem(props) {
  return (
    <div>
      <div class="card">
        <img src={props.img} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">
            {props.desc}
          </p>
          <a href="#" class="btn btn-dark">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

export default MovieItem;

import React from "react";
import { useLocation } from 'react-router-dom'

function MovieDetails(props) {
  return (
      <div>
        const loc = useLocation()
        console.log(loc);
      <h2>loc</h2>
      <h2>It the movie details</h2>
    </div>
  );
}

export default MovieDetails;

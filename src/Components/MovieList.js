import React, {useState} from 'react'

function MovieList() {
    const [result, setResult] = useState([]);
    const moviesList = async () =>{
        let data=await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=22a11be4d14b63a8250c0e0de6d489c4&language=en");
        let parsedData=data.json;
        setResult(parsedData.results);

        console.log(result);
    }

  return (
    <>
        {result.map(movie =>{
            
        })}
    </>
  )
}

export default MovieList
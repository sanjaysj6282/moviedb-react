import "./App.css";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  let APIKEY = process.env.REACT_APP_MOVIEDB_API_KEY;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MovieList apiKey={APIKEY} />} />
          <Route path="movie_details" element={<MovieDetails />} />
          {/* <Route path="movie_details">
            <Route path=":title" element={<MovieDetails />}/>
          </Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

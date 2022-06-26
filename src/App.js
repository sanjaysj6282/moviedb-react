import "./App.css";
import Navbar from "./Components/Navbar";
import MovieList from "./Components/MovieList";
import MovieDetails from "./Components/MovieDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";

function App() {
  let APIKEY = process.env.REACT_APP_MOVIEDB_API_KEY;
  let SESSIONID = process.env.REACT_APP_MOVIEDB_SESSION_ID;

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MovieList apiKey={APIKEY} sessionId={SESSIONID}/>} />
          <Route exact path="about" element={<About/>} />
          <Route path="movie_details">
            {/* title is added as URL parameter to be passed as para by movieItem*/}
            <Route path=":title" element={<MovieDetails />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

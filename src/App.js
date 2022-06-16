import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';

function App() {
  let APIKEY = process.env.REACT_APP_MOVIEDB_API_KEY
  // console.log(APIKEY);
  // let apiKey = "22a11be4d14b63a8250c0e0de6d489c4";
  return (
    <div className="App">
      <Navbar/>
      <MovieList apiKey={APIKEY}/>
    </div>
  );
}

export default App;

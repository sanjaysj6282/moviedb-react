import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MovieList from './Components/MovieList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <MovieList/>
    </div>
  );
}

export default App;

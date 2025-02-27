import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import MoviesList from "./component/MoviesList";
import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";
import { useDispatch } from "react-redux";

function App() {
  const [movies, setMovies] = useState([]);
  // const dispatch = useDispatch()
  const getMoviesData = async () => {
    const res = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
    );
    setMovies(res.data.results);
    console.log(res);
  };
  useEffect(() => {
    getMoviesData();
    // dispatch(getMoviesData())
  }, []);

  const search = async (word) => {
    if (word === "") {
      getMoviesData();
    } else {
      const res = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=52ef927bbeb21980cd91386a29403c78&query=${word}&language=ar`
      );
      setMovies(res.data.results);
    }
  };
  return (
    <div className="App">
      <NavBar search={search} />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

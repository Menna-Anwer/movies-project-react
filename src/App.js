import "./App.css";
import axios from "axios";
import MoviesList from "./component/MoviesList";
import { Container } from "react-bootstrap";
import NavBar from "./component/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./component/MovieDetails";


function App() {
 
  // const getMoviesData = async () => {
  //   const res = await axios.get(
  //     "https://api.themoviedb.org/3/movie/popular?api_key=52ef927bbeb21980cd91386a29403c78&language=ar"
  //   );
  //   setMovies(res.data.results);
  //   console.log(res);
  // };
  


  return (
    <div className="App">
      <NavBar/>
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList/>} />
            <Route path="/movie/:id" element={<MovieDetails/>} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;

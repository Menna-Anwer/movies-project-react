import React from "react";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllMovies, getSearchMovie } from "../redux/actions/movieAction";

const NavBar = () => {
  const dispatch = useDispatch()
  const onSearch = (e) => {
    searchMovie(e);
  };

    const searchMovie = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(getSearchMovie(word)); 
      // setMovies(res.data.results);
    }
  };
  return (
    <div className="nav">
      <Container>
        <div>
          <input
            type="text"
            className="form-control my-2"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="ابحث"
          />
        </div>
      </Container>
    </div>
  );
};

export default NavBar;

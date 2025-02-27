import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const param = useParams();
  const [movie, setMovie] = useState([]);
  const getMovieDetails = async () => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/${param.id}?api_key=52ef927bbeb21980cd91386a29403c78&language=ar`
    );
    console.log(res.data);
    
    setMovie(res.data);
  };
useEffect(()=>{
  getMovieDetails()
},[])
  return (
    <div>
      <Row className="justify-content-center">
      <Col md={5}>
          <Card>
            <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>
                <strong>Date:</strong> {movie.release_date} <br />
                <strong>Rating:</strong> {movie.vote_average} ⭐ <br />
                <p>{movie.overview}</p>
              </Card.Text>
             <Button className="btn btn-info" variant="primary" href="/">Go Back</Button> 
            <Button className="btn btn-primary mx-2" variant="primary" href="{movie.homepage}">view</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;

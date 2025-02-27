import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardMovie = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <Link to={`/movie/${movie.id}`}>
        <Card className="card">
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path} />
          <Card.Body>
            <Card.Title>{movie.title}</Card.Title>
            <Card.Text>
              <strong>Date:</strong> {movie.release_date} <br />
              <strong>Rating:</strong> {movie.vote_average} ⭐ <br />
              <strong>Language:</strong> {movie.original_language} <br />
            </Card.Text>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default CardMovie;

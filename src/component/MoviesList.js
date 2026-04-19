import React, { useEffect, useState } from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { getAllMovies } from '../redux/actions/movieAction';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getAllMovies())
    }, []);
   const getData = useSelector((state)=>state.movies)
   useEffect(() => {
    setMovies(getData)
  }, [getData]);
    return (
        <div>
            <Row className="mt-3">
                {
                    movies.length >= 1 ? (movies.map((movie) => {
                        return (
                        <CardMovie key={movie.id} movie={movie} />)
                    })) : 0
                }
            </Row>
        </div>
    )
}

export default MoviesList

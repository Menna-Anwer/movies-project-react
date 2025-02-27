import React from 'react'
import CardMovie from './CardMovie'
import { Row } from 'react-bootstrap'

const MoviesList = ({ movies }) => {
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

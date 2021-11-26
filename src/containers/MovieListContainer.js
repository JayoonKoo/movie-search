import React from 'react'
import MovieList from 'components/MovieList'
import { useSelector } from 'react-redux'

const MovieListContainer = props => {
	const movies = useSelector(state => state.movie.get('movies'))
	return (
		<MovieList movies={movies}/>
	)
}


export default MovieListContainer

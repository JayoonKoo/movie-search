import MovieDetail from 'components/MovieDetail'
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { getMovieThunk } from 'redux/modules/movie'

const MovieDetailContainer = ({backClick, id}) => {
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(getMovieThunk({id}))
	}, [dispatch, id])

	const movieInfo = useSelector(state => ({
		loading: state.movie.getIn(['movie', 'loading']),
		data: state.movie.getIn(['movie', 'data']),
		error: state.movie.getIn(['movie', 'error']),
	}))

	return (
		<MovieDetail backClick={backClick} movieInfo={movieInfo}/>
	)
}

MovieDetailContainer.prototype = {
	backClick: PropTypes.func,
	id: PropTypes.string
}



export default MovieDetailContainer

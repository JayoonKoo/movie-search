import Input from 'components/Input'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { getMoviesThunk } from 'redux/modules/movie'

const InputContainer = () => {
	const dispatch = useDispatch()
	const getMovies = useCallback(({title}) => {
		dispatch(getMoviesThunk({title}))
	}, [dispatch])
	return (
		<Input getMovies={getMovies}/>
	)
}

export default InputContainer

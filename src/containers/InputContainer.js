import Input from 'components/Input'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { clearMovies, getMoviesThunk } from 'redux/modules/movie'

const InputContainer = () => {
	const dispatch = useDispatch()
	const getMovies = useCallback(async ({title}) => {
		await dispatch(clearMovies())
		await dispatch(getMoviesThunk({title, page:"1"}))
	}, [dispatch])
	return (
		<Input getMovies={getMovies}/>
	)
}

export default InputContainer

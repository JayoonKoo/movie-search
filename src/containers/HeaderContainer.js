import Header from 'components/Header'
import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { clearMovies } from 'redux/modules/movie'

const HeaderContainer = () => {
	const dispatch = useDispatch()
	const titleClick = useCallback(() => {
		dispatch(clearMovies())
	}, [dispatch])
	return (
		<Header titleClick={titleClick}/>
	)
}

export default HeaderContainer

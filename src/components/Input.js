import React, { useCallback, useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = ({getMovies}) => {
	const titleRef = useRef(null)

	const handleSubmit = useCallback((e) => {
		e.preventDefault()
		const {value: title} = titleRef.current
		getMovies({title})
	}, [])

	return (
		<Container>
			<Form onSubmit={handleSubmit}>
				<InputStyled ref={titleRef} placeholder="영화 제목을 입력하세요..."/>
			</Form>
		</Container>
	)
}

Input.propTypes = {
	getMovies: PropTypes.func
}

const Container = styled.div`
	padding: 0 30px;
	padding-top: 20px;
`

const Form = styled.form`
`

const InputStyled = styled.input`
	text-align: center;
	display: block;
	font-size: 20px;
	padding: 20px;
	box-sizing: border-box;
	width: 100%;
`

export default Input

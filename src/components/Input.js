import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const Input = props => {
	return (
		<Container>
			<Form>
				<InputStyled placeholder="영화 제목을 입력하세요..."/>
			</Form>
		</Container>
	)
}

// Input.propTypes = {

// }

const Container = styled.div`
	width: 100%;
	height: 400px;
	padding: 100px;
`

const Form = styled.form`
	width: 100%;
`

const InputStyled = styled.input`
	text-align: center;
	margin: 0 auto;
	width: 1000px;
	display: block;
	font-size: 20px;
	padding: 20px;

	@media (max-width: 1220px) {
		width: 650px;
	}

	@media (max-width: 768px) {
		width: 100%;
	}
`

export default Input

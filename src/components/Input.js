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

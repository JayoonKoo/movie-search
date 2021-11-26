import React from 'react'
import PropTypes from 'prop-types'
import styled, { css, keyframes } from 'styled-components'

const Loading = props => {
	return (
		<Container>
			<LoadingStyled {...props} />
		</Container>
	)
}

Loading.propTypes = {
	size: PropTypes.number
}

const Container = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
`
const spin = keyframes`
	from {transform: rotate(0deg);}
	to {transform: rotate(359deg);}
`

const LoadingStyled = styled.div`
	margin: 5% auto;
	${p=> p.size? css`
		width: ${p.size}px;
		height: ${p.size}px;` 
		: css`
		width: 200px;
		height: 200px; `}
	border: 10px solid #999;
	border-right-color: red;
	border-top-color: red;
	border-radius: 50%;
	animation: ${spin} .2s infinite;
`




export default Loading

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
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 10;
`
const spin = keyframes`
	from {transform: rotate(0deg);}
	to {transform: rotate(359deg);}
`

const LoadingStyled = styled.div`
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	${p=> p.size? css`
		width: ${p.size}px;
		height: ${p.size}px;` 
		: css`
		width: 200px;
		height: 200px; `}
	border: 10px solid #999;
	border-right-color: #83C230;
	border-top-color: #83C230;
	border-radius: 50%;
	animation: ${spin} .8s infinite;
`




export default Loading

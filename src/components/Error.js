import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Error = ({title}) => {
	return (
		<ErrorContainer>
			<Title>
				{title}
			</Title>
		</ErrorContainer>
	)
}

Error.propTypes = {
	title: PropTypes.string
}

const ErrorContainer = styled.div`
	height: 400px;
	width: 100%;
	position: relative;
`

const Title = styled.span`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	font-size: 40px;
	font-weight: 700;
`
export default Error

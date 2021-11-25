import React from 'react'
// import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = props => {
	return (
		<HeaderStyled>
			<Title>
				Movie
			</Title>
		</HeaderStyled>
	)
}

// Header.propTypes = {

// }

const HeaderStyled = styled.header`
	padding-top: 40px;
`

const Title = styled.h1`
	text-align: center;
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 1.5px;
`

export default Header

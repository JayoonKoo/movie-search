import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Header = ({titleClick}) => {
	return (
		<HeaderStyled>
			<Title onClick={titleClick}>
				<span>Mo</span>vie
			</Title>
		</HeaderStyled>
	)
}

Header.propTypes = {
	titleClick: PropTypes.func
}

const HeaderStyled = styled.header`
	padding-top: 40px;
`

const Title = styled.h1`
	text-align: center;
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 1.5px;
	cursor: pointer;
	color: #fff;

	span {
		color: #83C230;
	}
`

export default Header

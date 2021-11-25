import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from './Layout'

const MovieList = props => {
	return (
		<Container>
			<Layout >
				<MovieListStyled>

				</MovieListStyled>
			</Layout>
		</Container>
	)
}

MovieList.propTypes = {

}

const Container = styled.section`
	border-top: 1px solid ;
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	top: 20vh;
`

const MovieListStyled = styled.ul`
	height: 100%;
	border: 1px solid;
	padding: 10px 30px;
`



export default MovieList

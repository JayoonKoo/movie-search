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
	height: 100%;
`

const MovieListStyled = styled.ul`
	height: 100%;
	box-sizing: border-box;
	margin: 30px;
`



export default MovieList

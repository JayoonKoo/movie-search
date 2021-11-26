import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from './Layout'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Movie from './Movie'

const MovieList = ({movies}) => {
	const [data, loading, error] = [movies.get('data'), movies.get('loading'), movies.get('error')]
	return (
		<Container>
			<Layout >
				<MovieListStyled>
					{data && 
						data.toJS().map(movie => <Movie key={movie.imdbID} movieInfo={movie} />)
					}
				</MovieListStyled>
			</Layout>
		</Container>
	)
}

MovieList.propTypes = {
	movies: ImmutablePropTypes.mapContains({
		loading: PropTypes.bool,
		data: ImmutablePropTypes.list,
		error: PropTypes.object
	})
}

const Container = styled.section`
	height: 100%;
`

const MovieListStyled = styled.ul`
	height: 100%;
	box-sizing: border-box;
	margin: 30px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	border: 1px solid;
`



export default MovieList

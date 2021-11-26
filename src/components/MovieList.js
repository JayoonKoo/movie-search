import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Layout from './Layout'
import ImmutablePropTypes from 'react-immutable-proptypes'
import Movie from './Movie'
import Error from './Error'
import Loading from './Loading'

const MovieList = ({movies}) => {
	const [data, loading, error] = [movies.get('data'), movies.get('loading'), movies.get('error')]

	if (loading) {
		return <Container>
			<Layout>
				<Loading />
			</Layout>
		</Container>
	}

	if (error) {
		return (
			<Container>
				<Layout>
					<Error title={error} />
				</Layout>
			</Container>
		)
	}

	return (
		<Container>
			<Layout >
				{data ? 
					<MovieListStyled>
						{data.toJS().map(movie => <Movie key={movie.imdbID} movieInfo={movie} />)}
					</MovieListStyled>
					: <Error title="영화를 검색해 보세요">
					</Error>
				}
			</Layout>
		</Container>
	)
}

MovieList.propTypes = {
	movies: ImmutablePropTypes.mapContains({
		loading: PropTypes.bool,
		data: ImmutablePropTypes.list,
		error: PropTypes.string
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
`

export default MovieList

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
				{data ? 
					<MovieListStyled>
						{data.toJS().map(movie => <Movie key={movie.imdbID} movieInfo={movie} />)}
					</MovieListStyled>
					: <NoMovieList >
							<Title>영화를 검색해 보세요.</Title>
					</NoMovieList>
				}
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
`

const NoMovieList = styled.div`
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

export default MovieList

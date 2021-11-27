import React, { useCallback, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MovieDetailContainer from "containers/MovieDetailContainer";

const Movie = ({ movieInfo }) => {
  const { Title, Poster, imdbID } = movieInfo;
  const [visible, setVisible] = useState(false);
  const togleMovieDetail = useCallback(() => {
    setVisible((prev) => !prev);
  }, []);

  return (
    <>
      <Container onClick={togleMovieDetail} Poster={Poster === "N/A" ? "noposter.png" : Poster}>
        <MovieTitle>{Title}</MovieTitle>
      </Container>
      {visible && (
        <MovieDetailContainer
          backClick={togleMovieDetail}
          id={imdbID}
        />
      )}
    </>
  );
};

Movie.propTypes = {
  movieInfo: PropTypes.object,
};

const Container = styled.div`
	border-radius: 10px;
  width: 200px;
  height: ${(200 * 3) / 2}px;
  margin: 10px;
  background-size: cover;
  overflow: hidden;
  background-image: ${(p) => (p.Poster ? `url(${p.Poster})` : "")};
  position: relative;
  cursor: pointer;
	box-shadow: 0 3px 4px rgba(0, 0, 0, .2);
  &:hover::after {
		content: "";
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
    border: 6px solid #83C230;
  }
`;

const MovieTitle = styled.h3`
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  font-size: 14px;
  padding: 14px;
  backdrop-filter: blur(4px);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #f2f2f2;
`;

export default Movie;

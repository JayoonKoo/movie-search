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
      <Container onClick={togleMovieDetail} Poster={Poster}>
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
  width: 200px;
  height: ${(200 * 3) / 2}px;
  margin: 10px;
  background-size: cover;
  overflow: hidden;
  background-image: ${(p) => (p.Poster ? `url(${p.Poster})` : "")};
  position: relative;
  cursor: pointer;
  &:hover {
    border: 6px solid;
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

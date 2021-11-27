import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";

const MovieDetail = ({ backClick, movieInfo , backClickClear}) => {
  const { loading, data, error } = movieInfo;
  const movieData = {};
  if (data) {
    const { Title, Runtime,  Poster, Plot } = data.toJS();
    movieData.Title = Title;
    movieData.Runtime = Runtime;
    movieData.Poster = Poster;
    movieData.Plot = Plot;
  }

  const handleClick = useCallback(
    (e) => {
      const { target, currentTarget } = e;
      if (target === currentTarget) {
				backClickClear();
        backClick();
      }
    },
    [backClick, backClickClear]
  );

  if (error) {
    return <Error title={error} />;
  }

  if (loading) {
    return <Loading size={100} />;
  }

  return (
    <>
      {data && (
        <Background onClick={handleClick}>
          <Inner>
            <PosterStyled Poster={movieData.Poster} />
            <DescriptContainer>
              <TitleStyled>{movieData.Title}</TitleStyled>
              <RuntimeStyled>RunTime : {movieData.Runtime}</RuntimeStyled>
              <Description>{movieData.Plot}</Description>
            </DescriptContainer>
          </Inner>
        </Background>
      )}
    </>
  );
};

MovieDetail.propTypes = {
  backClick: PropTypes.func,
  movieInfo: PropTypes.object,
	backClickClear: PropTypes.func,
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Inner = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  display: flex;
  width: 900px;
  height: 700px;
  justify-content: space-between;
  align-items: center;
  padding: 30px;
	border-radius: 10px;

  @media (max-width: 1200px) {
    width: 800px;
		height: 600px;
  }

  @media (max-width: 768px) {
    width: 400px;
		flex-direction: column;
		height: 900px;
  }
`;

const PosterStyled = styled.div`
  background-image: ${(p) => (p.Poster ? `url(${p.Poster})` : "")};
  background-size: cover;
  width: 420px;
  height: ${(420 * 3) / 2}px;
	border-radius: 10px;

	@media (max-width: 1200px) {
		width: 350px;
		height: ${350 * 3 / 2}px;
	}
`;

const DescriptContainer = styled.div`
  height: 100%;
  width: 400px;
  box-sizing: border-box;
	overflow: hidden;
	padding: 30px 20px;

	@media (max-width: 768px) {
		height: 50%;
	}
`;

const TitleStyled = styled.h4`
  font-size: 40px;
  margin-bottom: 20px;
`;


const Description = styled.p`
	margin-top: 40px;
	font-size: 18px;
	line-height: 1.2;
`;

const RuntimeStyled = styled.span`
  display: block;
  margin-bottom: 10px;
`;

export default MovieDetail;

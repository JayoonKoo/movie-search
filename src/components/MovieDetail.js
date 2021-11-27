import React, { useCallback } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loading from "./Loading";
import Error from "./Error";

const MovieDetail = ({ backClick, movieInfo }) => {
  const { loading, data, error } = movieInfo;
  const movieData = {};
  const imgArr = [
    "IMDB.png",
    "RottenTomatoes.png",
    "Metacritic.png",
  ];
  if (data) {
    const { Title, Runtime, Ratings, Poster, Plot } = data.toJS();
    movieData.Title = Title;
    movieData.Runtime = Runtime;
    movieData.Ratings = Ratings;
    movieData.Poster = Poster;
    movieData.Plot = Plot;
  }

  const handleClick = useCallback(
    (e) => {
      const { target, currentTarget } = e;
      if (target === currentTarget) {
        backClick();
      }
    },
    [backClick]
  );

  if (error) {
    return <Error title={error} />;
  }

  if (loading) {
    return <Loading />;
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
              {movieData.Ratings.map((RatingItem, i) => (
                <>
                  <Source src={imgArr[i]}/>
                  <Rating>{RatingItem.Value}</Rating>
                </>
              ))}
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
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.2);
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

  @media (max-width: 1200px) {
    width: 700px;
  }

  @media (max-width: 768px) {
    width: 400px;
  }
`;

const PosterStyled = styled.div`
  background-image: ${(p) => (p.Poster ? `url(${p.Poster})` : "")};
  background-size: cover;
  width: 420px;
  height: ${(420 * 3) / 2}px;
`;

const DescriptContainer = styled.div`
  height: 100%;
  width: 400px;
  box-sizing: border-box;
`;

const TitleStyled = styled.h4`
  font-size: 40px;
  margin-bottom: 20px;
`;

const Source = styled.img`
	display: inline-block;
	width: 35px;
	height: 25px;
`;

const Rating = styled.span`
	vertical-align: 5px;
	margin-left: 5px;
	margin-right: 14px;
	font-size: 14px;
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

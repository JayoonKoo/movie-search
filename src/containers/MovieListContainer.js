import React, { useEffect } from "react";
import MovieList from "components/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesThunk } from "redux/modules/movie";

const debounce = (fn, delay) => {
  let timerId = null;
  return (...arg) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn.bind(null, ...arg), delay);
  };
};

const MovieListContainer = (props) => {
  const [movies, title, page] = useSelector((state) => [
    state.movie.get("movies"),
    state.movie.get("title"),
    state.movie.get("page"),
  ]);
  const dispatch = useDispatch();
  const handleScroll = (e) => {
    const { clientHeight, scrollTop, scrollHeight } = e.target.scrollingElement;
    if (clientHeight + scrollTop === scrollHeight) {
			dispatch(getMoviesThunk({title, page: Number(page) + 1}))
    }
  };

  const debounceScroll = debounce(handleScroll, 300);
  useEffect(() => {
    window.addEventListener("scroll", debounceScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", debounceScroll);
    };
  }, [debounceScroll]);

  useEffect(() => {
		const documnetHeight = document.documentElement.scrollHeight;
		const screenHeight = window.innerHeight;
		if (!(documnetHeight > screenHeight) && title) {
			dispatch(getMoviesThunk({title, page: Number(page) + 1}))
		}
  }, [movies]);

  return <MovieList movies={movies} />;
};

export default MovieListContainer;

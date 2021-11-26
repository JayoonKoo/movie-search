import MovieService from "lib/MovieService";
import { createActions, handleActions } from "redux-actions";
import { fromJS, Map } from "immutable";

const prefix = "movie-search/movie";

const {
  getMoviesPending,
  getMoviesSuccess,
  getMoviesFail,
  getMoviePending,
  getMovieSuccess,
  getMovieFail,
  clearMovies,
  clearMovie,
} = createActions(
  "GET_MOVIES_PENDING",
  "GET_MOVIES_SUCCESS",
  "GET_MOVIES_FAIL",
  "GET_MOVIE_PENDING",
  "GET_MOVIE_SUCCESS",
  "GET_MOVIE_FAIL",
  "CLEAR_MOVIES",
  "CLEAR_MOVIE",
  { prefix }
);

const initailState = Map({
  movies: Map({
    loading: false,
    data: null,
    error: null,
  }),
  movie: Map({
    loading: false,
    data: null,
    error: null,
  }),
});

const reducer = handleActions(
  {
    GET_MOVIES_PENDING: (state) => state.setIn(["movies", "loading"], true),
    GET_MOVIES_SUCCESS: (state, action) =>
      state.setIn(["movies", "data"], fromJS(action.payload)),
    GET_MOVIES_FAIL: (state, action) =>
      state.setIn(["movies", "error"], fromJS(action.payload)),
  },
  initailState,
  { prefix }
);

export default reducer;

// thunk
export const getMoviesThunk =
  ({ title, page = 1 }) =>
  async (dispatch, state) => {
    dispatch(getMoviesPending());
		try {
			const movies = await MovieService.getMovies({ title, page });
			dispatch(getMoviesSuccess(movies.Search))
		} catch (error) {
			dispatch(getMoviesFail(error))
		}
  };

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

export { clearMovie, clearMovies };

const initailState = Map({
	title: "",
  page: 0,
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
    GET_MOVIES_PENDING: (state) =>
      state.setIn(["movies", "loading"], true).setIn(["movies", "error"], null),
    GET_MOVIES_SUCCESS: (state, action) => {
      const { response, movies, page, error, title } = action.payload;
			if (state.get('page') === page) {
				return state
			}
      if (response === "False") {
        throw new Error(error);
      }
      const newState =  state
				.set('title', title)
				.set('page', page)
        .setIn(["movies", "loading"], false)
			
			if (Number(page) > 1) {
				return newState.setIn(['movies', 'data'], fromJS([...state.getIn(['movies', 'data']).toJS(), ...movies]))
			} else {
				return newState.setIn(["movies", "data"], fromJS(movies));
			}
    },
    GET_MOVIES_FAIL: (state, action) =>
      state
        .setIn(["movies", "loading"], false)
        .setIn(["movies", "error"], fromJS(action.payload)),
    GET_MOVIE_PENDING: (state) =>
      state.setIn(["movie", "loading"], true).setIn(["movie", "error"], null),
    GET_MOVIE_SUCCESS: (state, action) =>
      state
        .setIn(["movie", "loading"], false)
        .setIn(["movie", "data"], fromJS(action.payload)),
    GET_MOVIE_FAIL: (state, action) =>
      state
        .setIn(["movie", "loading"], false)
        .setIn(["movie", "error"], fromJS(action.payload)),
    CLEAR_MOVIES: (state) => state.setIn(["movies", "data"], null).set('title', "").set('page', 0),
    CLEAR_MOVIE: (state) => state.setIn(["movie", "data"], null),
  },
  initailState,
  { prefix }
);

export default reducer;

// thunk
export const getMoviesThunk =
  ({ title, page }) =>
  async (dispatch) => {
    dispatch(getMoviesPending());
    try {
      const movies = await MovieService.getMovies({ title, page });
      dispatch(
        getMoviesSuccess({
          movies: movies.Search,
          response: movies.Response,
          page,
          error: movies.Error,
					title,
        })
      );
    } catch (error) {
      let errorMsg = "";
      if (error.response) {
        errorMsg = error.response.data;
      } else {
        errorMsg = error.message;
      }
      dispatch(getMoviesFail(errorMsg));
    }
  };

export const getMovieThunk =
  ({ id }) =>
  async (dispatch) => {
    dispatch(getMoviePending());
    try {
      const movie = await MovieService.getMovieDetail({ id });
      dispatch(getMovieSuccess(movie));
    } catch (error) {
      dispatch(getMovieFail(error.response.data));
    }
  };

import axios from "axios"

const API_KEY = '7035c60c'

export default class MovieService {
	
	static getMovies = async ({title, page}) => {
		const response = await axios({
			url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`,
			method: 'GET',
		})
		return response.data
	}

	static getMovieDetail = async({id}) => {
		const response = await axios({
			url: `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
			method: 'GET'
		})

		return response.data
	}
}

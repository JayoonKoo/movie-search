import axios from "axios"

export default class MovieService {
	
	static getMovies = async (payload) => {
		const {data} = await axios.post('/.netlify/functions/movies', payload)
		return data
	}

	static getMovieDetail = async(payload) => {
		const {data} = await axios.post('/.netlify/functions/movie', payload)
		return data
	}
}

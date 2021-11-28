const axios = require('axios')
const API_KEY = process.env.REACT_APP_API_KEY

exports.handler = async function(event) {
	const {id} = JSON.parse(event.body)
	const {data} = await axios({
		url: `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}&plot=full`,
		method: 'GET'
	})
	if (data.Response === 'False') {
		return {
			statusCode: 400,
			body: data.Error
		}
	} else {
		return {
			statusCode: 200,
			body: JSON.stringify(data)
		}
	}
}

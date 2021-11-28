// exports.handler = async function(event, context) {
// 	return {
// 		statusCode: 200,
// 		body: 'Hello world!'
// 	}
// }

const axios = require('axios')
const API_KEY = process.env.REACT_APP_API_KEY

exports.handler = async function(event) {
	const {title, page} = JSON.parse(event.body)
	const {data} = await axios({
		url: `https://www.omdbapi.com?apikey=${API_KEY}&s=${title}&page=${page}`,
		method: 'GET',
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

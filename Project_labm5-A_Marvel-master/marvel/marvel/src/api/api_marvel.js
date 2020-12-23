import axios from 'axios';

const Keypublic = 'bd8a67a15563a7425a69aedc11c376e8';

export default axios.create({
		baseURL: 'http://gateway.marvel.com/v1/public/',
		params: {
			apikey: Keypublic
		},
		headers: {
		}
	}
);

import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
	params: {
		maxResults: 50,
	},
	headers: {
		"x-rapidapi-key": "270e5cbbf1mshaaf3161362dd1c5p1a16cdjsnd2c3311abf05",
		"x-rapidapi-host": "youtube-v31.p.rapidapi.com",
	},
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options);

	return data;
};

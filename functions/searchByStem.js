const axios = require("axios");

const base =
	`https://www.googleapis.com/customsearch/v1?sort=date&key=${process.env.GOOGLE_KEY}&cx=009147208066171324061:sc7bwmvoqui&start=1&q=`;

	const searchByStem = async (stem) => {

		let url = base + stem;
		try {
			const response = await axios.get(url);
			return response.data.items;
		} catch (error) {
			console.log(error);
		}
	};

	module.exports = searchByStem;
const axios = require("axios");

const base =
	'https://www.googleapis.com/customsearch/v1'
const query = `?sort=date&key=${process.env.GOOGLE_KEY}&cx=009147208066171324061:sc7bwmvoqui&start=1&q=`;

	const searchByStem = async (stem) => {

		try {
			// let url = base + query + stem;
			// console.log(url);
			// const response = await axios.get(url);

			let url = base + query + stem;
			const response = await axios.get(base, {
				params: {
					'sort': 'date',
					'key': process.env.GOOGLE_KEY,
					'cx': '009147208066171324061:sc7bwmvoqui',
					'start': '1',
					'q': stem
				}
			});
			
			console.log("response.data");
			console.log(JSON.stringify(response.data, null, 4));
			console.log("response.data");

			return response.data.items;
		} catch (error) {
			console.log(error);
		}
	};

	module.exports = searchByStem;
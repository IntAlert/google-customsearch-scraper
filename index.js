require('dotenv').config();
const getFileName = require('./functions/getFileName');
const getStem = require('./functions/getStem');
const searchByStem = require('./functions/searchByStem');
const exportCSV = require('./functions/exportCSV');


const main = async () => {

	try {

		const allItems = {};

		while(true) {
			let stem = await getStem();
			stem = stem.trim();
			if ( !stem ) break;
			let items = await searchByStem(stem)
			allItems[stem] = items;
		}

		// ask for filename
		let filename = await getFileName();

		exportCSV(filename, allItems);

	} catch (error) {
		console.log(error);
	}

}

main();




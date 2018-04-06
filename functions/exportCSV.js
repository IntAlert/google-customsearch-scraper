var fs = require('fs');
const toCSV = require('array-to-csv')

const exportCSV = (filename, allItems) => {

	let rows = [];

	// add headers
	rows.push([
		'Stem',
		'Title',
		'Snippet',
		'URL'
	]);

	// console.log(allItems);

	// each stem
	for (const stem in allItems) {

		const items = allItems[stem];

		// each result
		for (const i in items) {
			
			let item = items[i];

			console.log(item.pagemap);

			// each field
			let row = [
				stem,
				`${escapeField(item.title)}`,
				`${escapeField(item.snippet)}`,
				item.formattedUrl,
			];

			rows.push(row);
		}

	}

	console.log(`${rows.length - 1} result(s)` );

	let csv = toCSV(rows)
	let path = `output/${filename}.csv`;
	console.log(path)
	fs.writeFileSync(path, csv, 'utf8');

	return rows;

}


const escapeField = (content) => {
	return content.replace(/\n/g, " ");
}

module.exports = exportCSV;

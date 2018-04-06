var inquirer = require('inquirer');

const getFileName = async () => {
	let questions = [
		{
			type: 'input',
			name: 'name',
			message: 'What would you like to name this search?',
			default: (new Date).getTime()
		}
	]
	
	return inquirer.prompt(questions)
		.then(answers => {
			return answers.name;
	})
	
}

module.exports = getFileName;

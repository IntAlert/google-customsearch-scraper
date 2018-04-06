var inquirer = require('inquirer');
const getStem = async () => {
	let questions = [
		{
			type: 'input',
			name: 'stem',
			message: 'What stem would you like to use?',
			default: ""
		}
	]
	
	return inquirer.prompt(questions)
		.then(answers => {
			return answers.stem;
	})
	
}

module.exports = getStem;

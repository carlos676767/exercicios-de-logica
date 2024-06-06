const chalk = require('chalk');

console.log(chalk.red('This is an error message!'));
console.log(chalk.green('This is a success message.'));
console.log(chalk.bold.underline('This text is bold and underlined.'));
console.log(chalk.bgBlue.white('This text has a blue background with white text.'));
console.log(chalk.keyword('orange')('This text is orange')); 


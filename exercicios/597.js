const fs = require('fs')

fs.readFile('rename.txt', 'utf8', (err, sucess) => {
    console.log(err);
    console.log(sucess);
})
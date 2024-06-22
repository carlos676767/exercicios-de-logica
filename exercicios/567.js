const fs = require("fs")

fs.rename("app.txt", 'rename.txt', (sucesso, err) => {
    console.log(sucesso);
    console.log(err);
})


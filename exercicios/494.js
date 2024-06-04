//lendo arquivo node js

const fs = require("fs")

fs.readFile("texto.txt", "utf-8", (error, sucess) => {
    if (error) {
        console.log(error);
    }
    console.log(sucess);
})

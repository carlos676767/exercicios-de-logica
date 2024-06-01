//http node js

const http = require("http")
http.createServer((error, sucess) => {
    sucess.end("ola mundo")
}).listen(8080)


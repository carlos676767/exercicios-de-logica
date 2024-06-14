const fs = require("fs")
const http = require("http")

const server = http.createServer((res, send) => {
    fs.readFile("index.html", (err, sucesso) => {
        send.setHeader("Content-Type", "text/html")
        send.write(sucesso)
        send.end()
    })
})

server.listen(8080, () => {
    console.log('rodando');
})
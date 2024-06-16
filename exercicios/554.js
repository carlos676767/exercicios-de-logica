const fs = require("fs")
const http = require("http")
const url = require("url")

const server = http.createServer((res, send) => {
    fs.readFile("index.html", (err, sucesso) => {
        send.setHeader("Content-Type", "text/html")
        send.write(sucesso)
        send.end()
    })
})

const novaUrl = new url.URL("https://github.com/carlos676767?tab=overview&from=2024-06-01&to=2024-06-14")
console.log(novaUrl);



server.listen(8080, () => {
    console.log('rodando');
})


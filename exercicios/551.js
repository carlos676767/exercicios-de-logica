//modulo http 
const http = require("http")

const httpPost = http.createServer((res, sucess) => {
    sucess.setHeader("Content-Type", "text/html")
    sucess.write("<h2>ola mundo tudo bem ?</h2> <br> <p> verdade </p>")
    sucess.end()
})

httpPost.listen(8087, () => {
    console.log('servidor rodando na porta 8087');
})
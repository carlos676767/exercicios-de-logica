const express = require("express")
const app = express()

app.get("/", (error, response) => {
    try {
        response.send({ sucesso: "sucess http", })
    } catch (error) {
        console.error()
        response.sendStatus(500).send({ erro: `${error} http 500` })
    }
})


app.listen(8081, () => {
    console.log("rodando...");
})

import axios from 'axios';
import express from 'express';

//usando o axios
const app = express()
app.get("/password", (req, response) => {
    try {
        throw new Error("error")
        response.send({passwords:'bygvvtf@hyut3344'})

    } catch (error) {
        console.log(error);
        response.status(404).send({responseData: "Erro 404 Not Found"})
    }
})

const consumirApi = async () => {
    try {
        const httpRequest = await axios.get("http://localhost:8080/password")
        console.log(httpRequest.data);
    } catch (error) {
        console.log(error);
    }
}

consumirApi()
const port = 8080
app.listen(port, () => {
    console.log(`servidor rodando na porta ${port}`);
})



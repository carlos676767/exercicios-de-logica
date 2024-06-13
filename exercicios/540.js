const express = require("express");
const bodyParser = require("body-parser");
const api = express();
const axios = require("axios");

api.post("/", (data, err) => {
  err.send({ nome: "ola mundo" });
});

async function http() {
  try {
    const https = await axios.post("http://localhost:8080/");
    console.log(https.data);
  } catch (error) {
    console.log(error);
  }
}

http();
api.listen(8080, () => {
  console.log("rodando");
});

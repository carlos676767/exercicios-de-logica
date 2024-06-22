const crypyo = require("crypto");
const SECRET_KEY = crypyo.randomBytes(32).toString("hex");
const express = require("express");
const api = express();
const jwt = require("jsonwebtoken");
const { MongoClient } = require("mongodb");

const bodyParser = require("body-parser");
//jwt serve para autenticar usuarios sem precisar ele fazer login no sistema novamente.
//entendi que ele tem uma chave que precisa para ser assinada, esta chave serve para gerar o jwt
api.use(bodyParser.json());
api.post("/register", (res, data) => {
  try {

  } catch (error) {
    console.log(error);
  }
});

api.get("/login", (res, data) => {
  try {
    data.send({ sucesso: "user successfully logged in", sts: 200 }).status(200);
  } catch (error) {
    data
      .send({ erro: "Incorrect password, enter your password again" })
      .status(401);
  }
});

api.listen(8080);

const express = require("express");
const multer = require("multer");
const cors = require("cors");
const api = express();
api.use(cors());
api.use(bodyparser.json());
const storage = multer.diskStorage({
  destination: (req, res, s) => {
    s(null, "./image");
  },
  filename:  (req, file, cb) =>  {
    const random = Math.floor(Math.random() * 10000)
    cb(null, file.fieldname  + random  + '.png')
  }
});

const multerUploud = multer({ storage: storage });


api.post("/upimg", multerUploud.single("file"), (req, res) => {
  try {
    if (!req.file) {
      res.send({ err: "img nao enviada." });
      return 
    }
    console.log(req.body);
    res.send({ msg: req.file.filename, msgImg: "img upada"});
  } catch (error) {
    console.log(error);
  }
});


api.listen(8080, () => {
  console.log("rodando");
});

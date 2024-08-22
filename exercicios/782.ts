import multer from "multer";
import express from "express";

import { Router, Request, Response } from "express";

class ExpressRouter {
  private static configExpress() {
    const api = express();
    api.use(express.static("image"))
    api.listen(8080, () => {
      console.log("servidor rodando");
    });
    return api;
  }

  protected static httpImage(multer: any) {
    const api = this.configExpress();
    api.post("/", multer.single("file"),
    (req: Request, res: Response) => {
      if (!req.file) {
        res.send({ msg: "img nao veio." });
        return;
      }
      const file = req.file.filename 
      const url: string = `http://localhost:8080/${file}`
      res.status(200).send({ msg: "img upada", url: url });
    });
  }
}

class MulterUp extends ExpressRouter {
  constructor() {
    super();
  }
  private static configMulter() {
    const storage = multer.diskStorage({
      destination: (req, res, s) => {
        s(null, "./image");
      },
      filename: (req, file, cb) => {
        const random = Math.floor(Math.random() * 10000);
        cb(null, file.fieldname + random + ".png");
      },
    });
    return multer({storage: storage})
  }
  public static httpMulter() : void{
    const multe = this.configMulter()
    ExpressRouter.httpImage(multe)
  }
}
MulterUp.httpMulter()

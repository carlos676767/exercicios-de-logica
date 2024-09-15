const axios = require("axios")

class Xml {
  #url;
  xmlHttp;

  constructor(url) {
    this.#url = url;
    this.xmlHttp = new XMLHttpRequest();
  }

  httpRequestGetXml() {
    this.xmlHttp.open("GET", this.#url, true);

    this.xmlHttp.onload = () => {
      if (this.xmlHttp.status != 200) {
        throw new Error("error xml request");
      }
      console.log(this.xmlHttp);
    };

    this.xmlHttp.send();
  }
}

const xml = new Xml("https://reqre/1");
xml.httpRequestGetXml();

async () => {
  try {
    const httpReuqets = await axios.get("https://reqres.in/api/u/1");
    
  } catch (error) {
    console.log(error);
  }
};

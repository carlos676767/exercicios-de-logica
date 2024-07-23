class HtppRequest {
  url: string;

  constructor(url: string) {
    this.url = url;
  }

  async httpGetRequest() {
    try {
      const getHttp = await fetch(this.url);
      const httpResponse = await getHttp.json();
      console.log(httpResponse);
    } catch (error) {
      console.log("error http get response 404", error);
    }
  }
};

function typeValidation(variable, type) {
    if (typeof variable == type) {
      return true
    }
    return false
  }
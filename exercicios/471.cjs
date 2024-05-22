const fs = require("fs");

fs.readFile("./app.json", "utf8", (error, call) => {
  if (error) {
    console.log(error);
  }
  console.log(call);
});

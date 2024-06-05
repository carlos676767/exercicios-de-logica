//module path node js
const path = require("path")
const extensaoArquivo = path.extname("app.html")
const nomeAquivo = path.basename('/foo/bar/baz/asdf/quux.html')
console.log(extensaoArquivo);
console.log(nomeAquivo);
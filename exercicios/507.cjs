
const arvs = process.argv
const resgatarMeta = arvs.slice(2)
const getNome = resgatarMeta[0].split("=")[1]

const getIdade = resgatarMeta[1].split("=")[1]
console.log(getNome, getIdade);
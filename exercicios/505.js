console.log(process.argv);
const args = process.argv.slice(2)
const testes = args[0].split("=")[1]
console.log(testes);
const args2 = process.argv.slice(2)
const testes2 = args[1].split("=")[2]

console.log(`${testes2} tem ${testes}`);
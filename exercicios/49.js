let metros = parseFloat(prompt("Digite a distancia em metros"))

let km = metros *  0.001
let hm = metros * 0.01
let dam = metros * 0.1
let dm = metros * 10
let cm = metros * 100
let milhas = metros * 1000
dm = dm.toFixed(1)
cm = cm.toFixed(1)
milhas = milhas.toFixed(1)
console.log(`A distancia de ${metros} corresponde a:`)
console.log(`${km}Km`)
console.log(`${hm}Hm`)
console.log(`${dam}Dam`)
console.log(`${dm}Dm`)
console.log(`${cm}Cm`)
console.log(`${milhas}Mm`)
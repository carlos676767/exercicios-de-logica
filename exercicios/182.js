let altura = parseInt(prompt(`Digite a altura`))
let largura = parseInt(prompt(`Digite a largura do terreno`))

let area = altura * largura
if (area < 100) {
    console.log(`Terreno popular`);
} else if (area >= 100 && area <= 500) {
    console.log(`terreno master`);
} else if (area > 500) {
    console.log(`terreno vip`);
}
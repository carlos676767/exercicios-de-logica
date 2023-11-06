 
let quantaspessoas = parseInt(prompt(`Digite quantas pessoas serão digitadas?`))

let arraynome = []
let arrayidade = []
let alturaarray = []
let somar = 0

for (let i = 0; i < quantaspessoas; i++) {
   let nome = prompt(`Digite o nome da pessoa`);
   let idade = parseInt(prompt(`Digite a idade da pessoa`));
   let altura = Number(prompt(`Digite a altura da pessoa`));


   arraynome.push(nome);
   arrayidade.push(idade);
   alturaarray.push(altura);
   
   somar += altura;
}

let media = somar / quantaspessoas;
console.log(`A média de altura é ${media}`);
console.log(`Nomes das pessoas:`, arraynome);
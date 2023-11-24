let recebernumeros = []
let contador = 0
let divi = 0
for (let i = 0; i < 20; i++) {
   let n = Math.floor(Math.random() * 20) 
   if (n >= 0 && n <= 10 ) {
    recebernumeros.push(n)
   }
   if (n >= 5) {
    ++contador
   }
   if (n %3 == 0) {
    ++divi
   }
}

console.log(`Os numeros sorteados e  ${recebernumeros}`);
console.log(`Exatamente ${contador} numeros estao acima de 5`);
console.log(`exatamente ${divi} numeros sao diviveis por 3`);
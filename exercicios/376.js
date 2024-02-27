const prompt = require('prompt-sync')();


const n1 = (prompt("Digite um numero"))

const converter = parseInt(n1)

let somar = 0;

for (let i = 1; i <= converter; ++i) {
   if(i %2 ==0){
     somar+= i
   }
}


console.log("os nuneros pares sao", somar)
function pares() {
  let n = parseInt(prompt(`Digite um n`));
  let contador = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
       ++contador
    }
  }
  console.log(`o total de numeros pares e ${contador}`);
}

pares()
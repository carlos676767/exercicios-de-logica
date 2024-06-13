//estruturas de repiticao
//while
//for
//do while

let contador = 0;
while (contador < 1000) {
  ++contador;
}

while (true) {
  const digite = prompt("Digite 1 para parar o loop");
  const converter = parseInt(digite);
  if (converter == 1) {
    alert("programa parou");
    break;
  }
}

//do while faz o loop e dps ver a dondicao
let contar = 5;
do {
  ++contar;
  console.log(contar);
} while (contar < 5);

//for

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

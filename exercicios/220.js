// Array que irá armazenar as cadeiras reservadas
let cadeirasReservadas = [];

// Loop infinito para reservar cadeiras
while (true) {
  // Array com as cadeiras disponíveis
  let cadeirasDisponiveis = [`b1`, `b2`, `b3`, `b4`, `b5`, `b6`, `b7`, `b8`, `b9`, `b10`];

  // Pergunta ao usuário para digitar a cadeira desejada
  let cadeiraEscolhida = prompt(`Digite o código da cadeira do cinema:`);

   // Adiciona a cadeira escolhida ao array de cadeiras reservadas
   cadeirasReservadas.push(cadeiraEscolhida);


   // Obtém o índice da cadeira escolhida no array de cadeiras disponíveis
   let indiceCadeira = cadeirasDisponiveis.indexOf(cadeiraEscolhida);
     
   cadeirasDisponiveis.splice(indiceCadeira, 1);

   if (cadeirasReservadas.includes(cadeirasDisponiveis)) {
     alert(`cadeira reservada`)
   }  


  if (cadeiraEscolhida === "n") {
    console.log(`Programa encerrado.`);
    console.log(`As cadeiras reservadas foram:`, cadeirasReservadas);
    break;
  }
}

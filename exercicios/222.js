//cria uma array que ira receber as mesas restantes
let mesasrestantes = [];
//cria uma array que mostra o total de mesas compradas
let totalmesascompradas = [];
//inicia uma variavel com o valor false
let exibir = false;
//faz o loop infinito
while (true) {
  //total de mesas
  let totaldemesas = [`m1`, `m2`, `m3`, `m4`, `m5`];
  //verifica se exibir e false se for aparece a mensagem
  if (exibir === false) {
    alert(`BEM VINDO AO RESTAURANTE LA ITALIA \n 
    as mesas ${totaldemesas} estao disponiveis`);
    exibir = true;
  }

  //pede ao usuario para agendar as mesas
  let agendarmesas = prompt(`[LA ITALIA]: quais das mesas voce quer agendar?`);

  //faz um loop no total de mesas
  for (let i = 0; i < totaldemesas.length; i++) {
    //verifica se oque eu digitei tem na array
    if (totaldemesas[i] === agendarmesas) {
      //se tive retirar um de acordo com o indice
      let retirarmesa = totaldemesas.splice(i, 1);
      //puxa o total de mesas compradas
      totalmesascompradas.push(retirarmesa);
      //ver as mesas restantes
      mesasrestantes.push([...totaldemesas]);
      //mostra ao usuario o total de mesas que ele agendou
      alert(`Você agendou ${agendarmesas}`);
      //exibe o total de mesas em vermelho
      alert(`as mesas ocupadas sao ${totalmesascompradas}`);
    }
  }

  let pedircontas = prompt(`deseja pedir a conta?, [S] , [N]`);
  if (pedircontas === `s`) {
    console.log(`o total de mesas compradas foi ${totalmesascompradas.length}`);
    break;
  }
}

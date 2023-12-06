let totalidades = [];
let nomesmaioresdevintetres = [];
while (true) {
  let idades = parseInt(prompt(`Digite uma idade`));
  let nomes = prompt(`Digite seu nome`);

  if (idades >= 23) {
    totalidades.push(idades);
    nomesmaioresdevintetres.push(nomes);
  }

  let continuar = prompt(`deseja continuar?, [N]`);

  if (continuar === `n`) {
    console.log(`idades maiores de 23`, totalidades);
    console.log(`nomes maiores de 23 anos`, nomesmaioresdevintetres);
    break;
  }
}

// Um herói está a caminho do castelo para completar
//  sua missão. No entanto, ele foi informado de que o castelo
//  está cercado por alguns dragões poderosos! cada dragão leva 2
//  balas para ser derrotado, nosso herói não tem ideia de quantas
//  balas ele deve carregar. Supondo que ele vai pegar um determinado
//  número específico de balas e seguir em frente para lutar contra outro
//  determinado número específico de dragões, ele sobreviverá?

// Retorne verdadeiro se sim, falso caso contrário :)
2 + 2 + 2 + 2 + 2;
function hero(bullets, dragons) {
  //cada dagrao levas duas balas para ser derrotado.
  // nosso heroi nao quantas balas deve carregar.
  let sum = 0;
  for (let i = 0; i < dragons; i++) {
    sum += 2;
  }
  return bullets >= sum ? true : false;
}

console.log(hero(10, 5));

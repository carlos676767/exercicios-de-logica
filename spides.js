function defineSuit(card) {
    const cartas = {
      "♣": "clubs",
      "♦": "diamonds",
      "♥": "hearts",
      "♠": "spades",
    };
  
    const indice = [card.length - 1];
    return cartas[card[indice]]
  }
  
  console.log(defineSuit("3♠"));
  
function warnTheSheep(queue) {
  let wolfIndice = null;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i] === "wolf") {
      wolfIndice = i;
      break;
    }
  }
  if (wolfIndice === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  }
  return `Oi! Sheep number ${
    queue.length - wolfIndice - 1
  }! You are about to be eaten by a wolf!`;
}

function feast(beast, dish) {
  const strBest = beast.split("")
  const strDish = dish.split("")
  const returletrasBeast = [strBest.shift(),...strBest.pop()].join("")
  const returnLetrasUltimaEPrimeiraDish = [strDish.shift(),...strDish.pop()].join("")
  return returletrasBeast == returnLetrasUltimaEPrimeiraDish ? true : false
}

console.log(feast("brown bear", "bear claw"));

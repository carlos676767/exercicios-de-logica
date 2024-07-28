function countSheeps(sheep) {
  let i = 0
  let contador = 0
  while (i < sheep.length) {
    if (sheep[i] == true) {
        ++contador
    }
    ++i
  }
  return contador
}
console.log(countSheeps([true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]));
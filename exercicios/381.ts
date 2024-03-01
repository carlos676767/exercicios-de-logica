const list: number[] = [5, 8, 3, 10, 2];

let maior = list[0];

for (let j = 0; j < list.length; j++) {
  if (maior < list[j]) {
    maior = list[j];
    if (maior > list[j]) {
      maior = list[j];
    }
  }
}

console.log(maior);

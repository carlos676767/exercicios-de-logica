const array: string[] = [];

for (let i = 0; i < 100; ++i) {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  const random = Math.floor(Math.random() * characters.length);
  const acessar = characters[random];
  array.push(acessar);
}

console.log(array);

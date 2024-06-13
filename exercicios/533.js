//estrutura de dados

//array e basicamente uma lista
const arr = [1, 1, 5, 9, 254];
for (let i = 0; i < arr.length; i++) {
  if (arr.includes(2)) {
    console.log(true);
  }
  console.log(arr[i]);
}
//pilha o ultimo elemento a entrar e o primeiro a sair.

const array = [1, 2, 3];
array.push(10);
const pilha = array.pop();

//fila o primeiro elemento a entrar e o primeiro a sair.

const fila = [1, 2, 9, 8, 5, 6, 4, 6];
fila.unshift(100);
fila.shift(100);

//conjuntos sets
const valores = [1, 1, 1, 2, 2, 3, 3, 1, 2, 3];
const conjunto = new Set(valores);
console.log(Array.from(conjunto));

//dicionarios= objetos
const pessoa = {
  nome: "CARLOS",
  idade: 18,
};

//descontruction
const { nome, idade } = pessoa;

const arrayNew = [21, 6, 9, 8];
const [ba, uv] = arrayNew;

//hashmap

const hashmapNew = new Map();

hashmapNew.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });
hashmapNew.set("idade", 18);
hashmapNew.set("pais", "bostil");
hashmapNew.get("pais");
hashmapNew.has("pais");
hashmapNew.delete("idade");
console.log(hashmapNew);

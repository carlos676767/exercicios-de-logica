// Dado um array de usuarios(cod,idade,nome)

// 1- Ordene por idade de forma crescente[x]

const arr = [
  { idade: 1, nome: "clarinha" },
  { idade: 1, nome: "abnin" },
  { idade: 2, nome: "teste" },
  { idade: 3, nome: "João" },
  { idade: 2, nome: "Maria" },
  { idade: 4, nome: "Pedro" },
  { idade: 1, nome: "Ana" },
  { idade: 2, nome: "Lucas" },
  { idade: 3, nome: "Mariana" },
  { idade: 4, nome: "Fernanda" },
  { idade: 2, nome: "José" },
  { idade: 3, nome: "Carlos" },
  { idade: 1, nome: "Beatriz" },
  { idade: 4, nome: "Laura" },
  { idade: 2, nome: "Paulo" },
  { idade: 3, nome: "Juliana" },
  { idade: 1, nome: "Rafael" },
  { idade: 4, nome: "Camila" },
  { idade: 2, nome: "Gabriel" },
  { idade: 3, nome: "Patrícia" },
];

const ordenarOrdemCresnte = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i].idade < array[j].idade) {
        const temp = array[j];
        array[j] = array[i];
        array[i] = temp;
      }
    }
  }
  return array;
};

ordenarOrdemCresnte(arr);

//deve exibir um menu
// com as seguintes opções:
// - Adicionar um item
//  - Remover um item
// - Ver a lista completa
//  - Sair do programa[x]

const lista = [];
while (true) {
  const menu = prompt(
    "[1] PARA ADD UM ITEM, [2] REMOVER ITEM, [3] PARA LISTAR TODOS ITEM"
  );
  switch (menu) {
    case "1":
      const item = prompt("Digite seu item");
      alert(`item add ${item}`);
      lista.push(item);
      break;
    case "2":
      const qual = prompt("qual item deseja remover?");
      for (let i = 0; i < lista.length; i++) {
        if (!qual.includes(lista[i])) {
          alert("o produto nao tem na lista");
        } else {
          lista.splice(i, 1);
          alert("item removido");
        }
      }
      break;
    case "3":
      alert(lista);
      break;

    default:
      break;
  }
  const sair = prompt("Deseja sair ?");
  if (sair.includes("sim")) {
    break;
  }
}

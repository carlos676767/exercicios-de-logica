const loopInfinito = (): void => {
  while (true) {
    if (confirm("Deseja parar o programa ?")) {
      break;
    }
    menu();
  }
};

const menu = (): void => {
  const opcoes = prompt(`Digite [1] para criar conta
    Digite [2] para adicionar saldo`);
  switch (opcoes) {
    case "1":
      criarConta();
      break;
    case "2":
      adicionarSaldo();
      break;
    default:
      break;
  }
};

const criarConta = (): void => {
  let numeroConta: string[] = [];
  for (let i = 0; i < 8; ++i) {
    const conta = String(Math.floor(Math.random() * 10));
    numeroConta.push(conta);
  }
  const juntarNumeros = numeroConta.join("");
  const formtarNumeros = juntarNumeros.replace(/^(\d{4})(\d{4})$/, "$1-$2");
  alert("criando conta...");
  alert(`Bem vindo(a), o numero da sua conta e ${formtarNumeros}`);
};

let saldo: number = 0;
const adicionarSaldo = () => {
  const addSaldo = Number(
    prompt("Digite quanto voce quer colocar na sua conta")
  );
  saldo += addSaldo;
  alert(`Seu saldo $${saldo} reais`);
};

loopInfinito();

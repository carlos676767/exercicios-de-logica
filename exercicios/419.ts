//omit com type

type pessoa = {
  nome: string;
  idade: string;
  cpf: string;
};

type novaPessoa = Omit <pessoa, 'cpf'|"nome">
const novoObj: novaPessoa = {
    idade: "20"
}

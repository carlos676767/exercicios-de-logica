//estudando promises
//dada uma api consuma ela usando uma promise

//explicao: uma promise serve para retornar se minha funcao anyc foi com sucesso ou nao
//existe varios estados dela:
//pendente: a operacao esta pendente.
//concluida: a operacao foi um sucesso.
//rejeitada: a operacao foi rejeitada.

const reqHttpGet = () => {
  return new Promise(async (sucess, reject) => {
    try {
      const data = await fetch("https://jsonplaceholder.typicode");
      const response = await data.json();
      console.log(response);
      return sucess("sucesso");
    } catch (error) {
      console.log(error);
      return reject("operacao nao realizada");
    } finally {
      console.log("a operacao foi feita, porem pode ter tido erros.");
    }
  });
};
reqHttpGet()
  .then((data) => {
    console.log(data);
  })
  .catch((erro) => {
    console.log(erro);
  });

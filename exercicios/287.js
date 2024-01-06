const funcaoUsandoClosure = () => {
  const mensagem = `ola, esta mensagem e um teste!`;

  const novaFuncao = () => {
    console.log(mensagem);
  };

  novaFuncao();
};

funcaoUsandoClosure();
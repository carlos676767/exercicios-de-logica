const apiTestes = async () => {
  let n = 10;
  try {
    //tenta executar um codigo
  } catch (error) {
    //serve para tratar os erros
  } finally {
    n = 0;
    //serve para indepente de oq acontece executar esse bloco
  }
};

apiTestes();

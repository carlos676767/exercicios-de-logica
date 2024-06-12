// Uma academia deseja fazer um senso entre seus clientes para descobrir o mais alto,
// o mais baixo, a mais gordo e o mais magro, para isto você deve fazer um programa que
// pergunte a cada um dos clientes da academia seu código, sua altura e seu peso.
// O final da digitação de dados deve ser dada quando o usuário digitar 0 (zero) no campo código.
// Ao encerrar o programa também deve ser informados os códigos e valores do clente mais
// alto, do mais baixo, do mais gordo e do mais magro, além da média das alturas e dos pesos dos clientes.

const pesquisaAcademia = () => {
  let magros, maisAltos;
  while (true) {
    const perguntar = prompt(
      "Responda a pesquisa, 1 para magro, 2 para mais alto"
    );
    if (parseInt(perguntar) == 1) {
      ++magros;
    }
    if (parseInt(perguntar) == 2) {
      ++maisAltos;
    }

    if (parseInt(perguntar) == 0) {
      console.log(`magros: ${magros}, mais altos: ${maisAltos}`);
      break;
    }
  }
};

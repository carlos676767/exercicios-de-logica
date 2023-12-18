const votos = () => {
    // Inicializa contadores para cada candidato
    let contarVotoCandidato1 = 0;
    let contarVotoCandidato2 = 0;
    let contarVotoCandidato3 = 0;
    let contarVotoCandidato4 = 0;
  
    // Inicializa variáveis para contagem de votos brancos e nulos
    let votosNulos = 0;
    let votosBrancos = 0;
  
    // Inicializa variável para armazenar os votos totais
    let votos1 = 0;
  
    // Array para armazenar todos os votos
    let array = [];
  
    // Loop infinito para receber os votos
    while (true) {
      // Solicita ao usuário que digite os votos
      votos1 = parseInt(prompt(`Digite os votos`));
  
      // Adiciona o voto ao array
      array.push(votos1);
  
      // Se o voto for igual a zero, encerra o loop
      if (votos1 === 0) {
        break;
      }
  
      // Contagem de votos para cada candidato e categorias nulos e brancos
      switch (votos1) {
        case 1:
          ++contarVotoCandidato1;
          break;
        case 2:
          ++contarVotoCandidato2;
          break;
        case 3:
          ++contarVotoCandidato3;
          break;
        case 4:
          ++contarVotoCandidato4;
          break;
        case 5:
          ++votosNulos;
          break;
        case 6:
          ++votosBrancos;
          break;
        default:
          alert(`Digite um numero correto.`);
          break;
      }
    }
  
    // Calcula a porcentagem de votos brancos e nulos em relação ao total de votos
    let totalVotosBrancos = (votosBrancos / array.length) * 100;
    let totalVotosNulos = (votosNulos / array.length) * 100;
  
    // Objeto com os resultados
    let resultado = {
      contarVotoCandidato1,
      contarVotoCandidato2,
      contarVotoCandidato3,
      contarVotoCandidato4,
      votosNulos,
      votosBrancos,
      totalVotosBrancos,
      totalVotosNulos,
    };
  
    // Exibe os resultados na forma de tabela no console
    console.table(resultado);
  };
  
  // Chama a função para iniciar a contagem de votos
  votos();
  



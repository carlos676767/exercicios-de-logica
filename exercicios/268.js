const contagemDePares = () => {
    // Solicitar um número ao usuário
    let limite = parseInt(prompt("Digite um número para a contagem de números pares: "));
    
    // Inicializar a variável de contagem e número
    let contagem = 0;
    let numero = 0;
    
    // Enquanto o número for menor ou igual ao limite informado
    while (numero <= limite) {
      // Se o número for par, exibir e incrementar a contagem
      if (numero % 2 === 0) {
        console.log(`Número par: ${numero}`);
        contagem++;
      }
      
      // Incrementar o número para a próxima iteração
      numero++;
    }
    
    // Exibir a contagem total de números pares
    console.log(`Total de números pares: ${contagem}`);
  };
  
  // Chamar a função
  contagemDePares();
  
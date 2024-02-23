const verificarIsograma = () => {
    const palavra = "ana";
    const palavraSemEspacos = palavra.replace(/\s/g, ''); 
    const validarPalavra = /^(?:([a-zA-Z])(?!\1))+[a-zA-Z]$/;
  
    if (!validarPalavra.test(palavraSemEspacos)) {
      console.log('Não é um isograma');
    } else {
      console.log("É um isograma");
    }
  }
  
  verificarIsograma();
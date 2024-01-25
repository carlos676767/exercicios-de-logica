while (true) {
    const numeroUsuario = parseInt(prompt(`Digite o numero do usuario`));
    const armazenar = 1234;
  
    if (numeroUsuario !== armazenar) {
      alert(`Usuario invalido`);
    } else {
      const senha = parseInt(prompt(`Digite uma senha`));
      if (senha === 9999) {
        alert(`Acesso permitido`);
        break;
      } else {
        alert(`Senha incorreta`);
      }
    }
  }
  
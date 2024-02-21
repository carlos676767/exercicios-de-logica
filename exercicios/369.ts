
const validarSenha = () => {
    const minhaSenha: string = "dffd3";
    const maiuscula = /[A-Z]/;
    const minuscula = /[a-z]/;
    const numeros = /\d/;
  
    if (minhaSenha.length < 8) {
      console.log("A senha deve ter no mínimo 8 caracteres");
      return;
    }
    
    if (!maiuscula.test(minhaSenha) || !minuscula.test(minhaSenha) || !numeros.test(minhaSenha)) {
      console.log("A senha deve conter pelo menos uma letra maiúscula, uma minúscula e um número");
      return;
    }
  
    console.log("A senha possui os requisitos");
  };
  
  validarSenha();
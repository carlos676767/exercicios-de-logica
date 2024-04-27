const senha: string = "2a@Hhbb32";

const verificarComPrimentoSenha = (senha: string): void => {
  senha.length > 8
    ? console.log(`A senha possui 8 de comprimento`)
    : console.log("Digite uma senha com 8 de comprimento", false);
};

const verificarMaisculas = (senha: string): void => {
  const maisculas = /[A-Z]/;
  const minusculas = /[a-z]/;
  if (maisculas.test(senha) && minusculas.test(senha)) {
    console.log("A senha possui letras maisculas e minusculas");
  } else {
    console.log("A senha nao possui letras maisculas e minusculas");
  }
};

const verificarNumeros = (senha: string): void => {
  const regex = /[0-9]/g;
  if (regex.test(senha)) {
    console.log("a senha possui numeros");
  } else {
    console.log("nao possui numeros");
  }
};

const verificarCaractreses = (senha: string): void => {
  const regex = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|\-=]/;
  regex.test(senha)
    ? console.log("possui caractrees")
    : console.log("nao possui");
};

verificarComPrimentoSenha(senha);
verificarMaisculas(senha);
verificarNumeros(senha);
verificarCaractreses(senha);

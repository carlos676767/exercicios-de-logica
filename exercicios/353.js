const valideInformacoes = () => {
    let nome = prompt(`Digite seu nome`);
    let idade = parseInt(prompt(`Digite sua idade`));
    let salario = parseInt(prompt(`Digite seu salario`));
    let sexo = prompt(`Digite seu sexo`);
    let estadoCivil = prompt(`Digite seu estado civil`);
  
    const validarInformacoes = () => {
      if (nome.length > 3) {
        console.log(`O nome tem mais de 3 letras`);
      } else {
        console.log(`O nome deve ter mais de 3 letras`);
      }
  
      if (idade >= 0 && idade <= 150) {
        console.log(`A idade está entre 0 e 150`);
      } else {
        console.log(`A idade deve estar entre 0 e 150`);
      }
  
      if (salario > 0) {
        console.log(`O salário é maior que zero`);
      } else {
        console.log(`O salário deve ser maior que zero`);
      }
  
      if (sexo === `f` || sexo === `m`) {
        console.log(`O sexo é válido`);
      } else {
        console.log(`O sexo deve ser 'f' ou 'm'`);
      }
  
      if (["s", "c", "v", "d"].includes(estadoCivil)) {
        console.log(`O estado civil é válido`);
      } else {
        console.log(`O estado civil deve ser 's', 'c', 'v' ou 'd'`);
      }
    };

    validarInformacoes();
  };
  
  valideInformacoes();
  

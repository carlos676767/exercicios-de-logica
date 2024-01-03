let generoPessoas = []
let idadesPessoas = []
const informacoes = () => {
    for (let i = 0; i < 5; i++) {
       let sexo = prompt(`Digite F para mulher , H para homem`)
       let idade = parseInt(prompt(`Digite sua idade`))
       generoPessoas.push(sexo)
       idadesPessoas.push(idade)
    }
}
informacoes();

const contarGeneros = () => {
  let contarMulheres = 0;
  let contarHomens = 0;
  for (let i = 0; i < generoPessoas.length; i++) {
    if (generoPessoas[i] === "f") {
      ++contarMulheres;
    } else if (generoPessoas[i] === "h") {
      ++contarHomens;
    } else {
      alert("Digite um genero valido.");
      return;
    }
  }

  console.log(`O numero total de mulheres cadastradas e de ${contarMulheres}`);
  console.log(`O numero total de homens cadastrados e de ${contarHomens}`);
};

contarGeneros();

const mediaIdadeGrupo = () => {
    let somar = 0
    for (let i = 0; i < idadesPessoas.length; i++) {
        somar+= idadesPessoas[i]
    }
    let media = somar/idadesPessoas.length
    console.log(`A media de idade do grupo e de ${media}`);
}

mediaIdadeGrupo();

const mediaIdadeHomens = () => {
  let somar = 0;
  let homens = 0;

  for (let i = 0; i < generoPessoas.length; i++) {
    if (generoPessoas[i] === "h") {
      somar += idadesPessoas[i];
      ++homens;
    }
  }
  let media = somar / homens;
  console.log(`A média de idade dos homens é ${media}`);
};

mediaIdadeHomens();

const mulheresComMaisDe20Anos = () => {
    let idades = 0
    for (let j = 0; j < idadesPessoas.length; j++) {
        if (idadesPessoas > 20) {
           ++idades 
        }
    }
    console.log(`o numero total de mulheres com mais de 20 anos e de  ${idades}`);
}

mulheresComMaisDe20Anos()
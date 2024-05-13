//passos

//crie dois prompt com duas notas
// calcule a media dos numeros
//defina uma media
//exiba o resultado

//entrada

let nota1 = Number(prompt("Digite uma nota")); //entrada
let nota2 = Number(prompt("Digite a segunda nota")); //entrada
let nome = prompt("Digite seu nome"); //entrada

//processamento

let media = (nota1 + nota2) / 2;

media = media.toFixed(2);
//controle

if (isNaN(nota1) && isNaN(nota2)) {
  alert(`digite somente numeros`);
} else if (media >= 8) {
  alert(
    `o aluno ${nome} tirou a media ${media}, parabens voce passou para o 3*ANO`
  );
} else if (media >= 5 && media <= 6) {
  alert(`o aluno ${nome} a media foi de ${media}, voce esta de recuperacao`);
} else {
  alert(`o aluno ${nome} tirou a media de ${media}, voce esta reprovado`);
}

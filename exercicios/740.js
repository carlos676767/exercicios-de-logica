//A primeira matriz de entrada é a chave para as respostas corretas de um
// exame, como ["a", "a", "b", "d"]. O segundo contém as
// respostas enviadas por um aluno.
// As duas matrizes não estão vazias e têm o mesmo
// comprimento. Retorne a pontuação para esta matriz de respostas,
//dando +4 para cada resposta correta, -1 para cada resposta incorreta e
//+0 para cada resposta em branco, representada como uma string
//vazia (em C é usado o caractere de espaço).
// Se a pontuação < 0, retorne 0.

function checkExam(array1, array2) {
  let somar = 0;
  for (let i = 0; i < array2.length; i++) {
    if (array2[i] === array1[i]) {
      somar += 4;
      
    }

    if (array2[i] && array1[i] != array2[i]) {
      somar -= 1;
    }
  }
  if (somar < 0) {
    return 0;
  }
  return somar;
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
















//primeira sao as respostas
//segunda enviadas pelo os alunos.

//para cada r certa der +4
//para cada errada der -1
//para cada vazia 0

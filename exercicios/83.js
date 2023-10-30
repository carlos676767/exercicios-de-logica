let array = [5,4,3,2,1]
let resultado = somar(array)
console.log(resultado);
//criar uma array
// crie uma funcao
// percorra o array com outro array
// verifica qual e o menor
//faz uma troca de maos



function somar(test) { //cria uma funcao
  let variavel //cria uma var
  for(let i = 0; i < test.length; i++) { //percorre minha array
    for (let j = 0; j < test.length; j++) { //trava minha array
      if (test[i] < test[j]) { //compara se test e menor que test j
        variavel = test[i] //cria uma variavel que recebe test i
       test[i] = test[j] //test i recebe j
       test[j] = variavel //test j recebe variavel
      } 
    } 
  }
  return test
}


//Sua tarefa é escrever uma função que receba dois ou mais objetos
// e retorne um novo objeto que combine todos os objetos de entrada.

// Todas as propriedades do objeto de entrada terão apenas valores numéricos.
//  Os objetos são combinados para que os valores das chaves correspondentes
//  sejam somados.

// Um exemplo:

// const objA = {a: 10, b: 20, c: 30}
// const objB = {a: 3, c: 6, d: 3}
// combine(objA, objB) // Retorna
// A função combine deve ser um bom cidadão,
// portanto não deve alterar os objetos de entrada.

class Combine {
  constructor(...objs) {
    this.objs = objs;
  }

  combine() {
    const arrObject = Object.keys(objB);
    const arrObect2 = Object.keys(objA);
    const concatArr = new Set(arrObect2.concat(arrObject));
    const arrObjectNew = {};
    concatArr.forEach((key) => {
      const value1 = objA[key] || 0;
      const value2 = objB[key] || 0;
      arrObjectNew[key] = value1 + value2;
    });
    return arrObjectNew;
  }
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const combine = new Combine(objA, objB); //{ a: 13, b: 20, c: 36, d: 3 }

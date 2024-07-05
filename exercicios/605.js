//Extrair e Converter Caracteres:

//Escreva uma função que recebe uma string e retorna uma 
//nova string onde cada caractere é seguido por seu código Unicode.
//Extrair e Converter Caracteres:

//Escreva uma função que recebe uma string e retorna uma 
//nova string onde cada caractere é seguido por seu código Unicode.

//Extrair e Converter Caracteres:

//Escreva uma função que recebe uma string e retorna uma 
//nova string onde cada caractere é seguido por seu código Unicode.
function ConverterStr(str) {
    //vou na minha tabela ascki e pego 
      //trasformar cada valor la em o numero
      //juntar os valores
      //exx de saiada H72e101l108l108o111
      let pegar = ''
      for (let i = 0; i < str.length; i++) {
          pegar +=  str[i] +  str[i].charCodeAt(0)
      }
      return pegar
  }
  
  console.log(ConverterStr('Hello'))
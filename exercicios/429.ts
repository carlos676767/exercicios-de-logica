// Dada uma string composta por
// palavras e espaços retorne o comprimento da
// última palavra, ignorando os espacos.


const retornarComprimentoDaUltimaString = (palavra: string) => {
  const transformarEmArray: string[] = palavra.split(" ");
  const obterUltimaString = transformarEmArray.pop();
  const obterComprimentoString = obterUltimaString !== undefined ? obterUltimaString.length : null;
  return obterComprimentoString;
};


console.log(
  retornarComprimentoDaUltimaString(
    "Esta    é    uma     string     com         espaços"
  )
);
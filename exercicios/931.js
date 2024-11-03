const retornarUltimaEprimeiraLetra = (text) => {
    const vecror = text.split('')
    return [vecror.shift(),vecror.pop()]
  }
  
  console.log(retornarUltimaEprimeiraLetra('ola meu nome e carlços'))
const segundoMaior = (n) => {
    const maior = Math.max(...n)
  
    const v = n.filter(c => c < maior)
  
    return Math.max(...v)
  }
  
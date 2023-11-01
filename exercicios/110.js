for (let i = 0; i < 6; i++) {
  let n1 = parseInt(prompt(`Digite um valor`))
  if (n1 < 0) {
    console.log(`Digite um numero positivo`)
  } else if(n1 >= 0 && n1 <=10){
    console.log(`Os valore estao entre zero e dez, ${n1}`)
  } else{
    console.log(`Os numeros nao sao negativos ${n1}`)
  }
}




confirm(`||MENU|| \n [1] de 1 a 10 \n[2] de 10 a 1 \n[3] sair`)

let n1 = parseInt(prompt("Digite um valor da tabela anterior"))


switch (n1) {
   case 1: {
    for (let i = 0; i <= 10; i++) {
       console.log(i)   
    }
    break
   }
   case 2: {
    for(let i = 10; i >= 1; --i){
        console.log(i)
    }
    break
   }
   case 3: {
      console.log(`Programa encerrado`)
    break
   }
   default: {
    alert(`Digite um numero valido`)
   }
}
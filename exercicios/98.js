let resultado = somar()
console.log(resultado)

function somar(){
    let somar = 0
    for(let i = 1; i < 100; ++i){
       if (i %2 == 0) {
        somar+=i
       }
    } return somar
}




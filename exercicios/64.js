
while (true) {
    let x = parseInt(prompt("Digite um numero"))
    let y = parseInt(prompt("Digite outro numero"))
   if(x === y){
    alert(`os numeros sao iguais`)
    break
   }else if(x < y){
    alert("Os números estão em ordem crescente");
   } else{
    alert("Os números estão em ordem decrescente")
   }
}

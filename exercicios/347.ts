const array: number[] = [20,10,40,50,80,2, 7, 3]
const obterNumerosPare: number[] = []
const obterNumerosImpares: number[] = []

for(let i = 0; i < array.length; i++){
    if(array[i] %2 == 0){
        obterNumerosPare.push(array[i])
    }else{
        obterNumerosImpares.push(array[i])
    }
}

console.log(`numeros pares`, obterNumerosPare)
console.log(`numeros impares`, obterNumerosImpares)
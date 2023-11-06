let array = [2,9,1,2,1,9,0,3,2,8]

let maioraforin = 0
let maiorparafor = 0

function encontremaiorparaforin(){
    array.forEach(element => {
        if (element > maioraforin) {
            maioraforin = element
        }
    }); return maioraforin
}

let resultadoparaforin = encontremaiorparaforin()
console.log(`O numero maior usando forEach foi o ${resultadoparaforin}`)

function encontrarmaiorescomfor(){
    for(let i = 0; i < array.length; ++i){
        if(array[i] > maiorparafor){
            maiorparafor = array[i]
        }
    } return maiorparafor
}
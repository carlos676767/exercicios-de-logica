function findShort(s) {
    const palavra = s.split(' ')
    const arrayMin = palavra.map((data =>  data.length))
    let menor = Math.min()
    for (let i = 0; i < arrayMin.length; i++){
       if ( arrayMin[i] < menor)   menor = arrayMin[i]
    }
    return menor
}

console.log(findShort('ola meu nome e22 carlos'))

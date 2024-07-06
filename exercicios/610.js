function findShort(s) {
    const palavra = s.split(' ')
    const arrayMin = palavra.map((data =>  data.length)).reduce((acc, ac) => acc < ac ? acc : ac) 
}

console.log(findShort('ola meu nome e22 carlos'))

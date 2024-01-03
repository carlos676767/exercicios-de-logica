const maiores = (n1, n2,n3) => {
    let somar = n2 + n3
    if (n1 > somar) {
        return `O numero e maior`
    }else{
        return `O numero nao e maior `
    }
}

console.log(maiores(10,4,2));

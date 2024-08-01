const pares = () => {
    const arr = [4, 7, 2, 9, 10]
    const nPares = arr.filter(data => data %2 == 0).length
    const nImapres = arr.filter(data => data %2!== 0).length
    console.log(nImapres, nPares);
}

pares()
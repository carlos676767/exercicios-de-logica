const retornarAlfabeto = (n) => {
    return Array.from(Array(26).keys()).map((data) =>
    String.fromCharCode(data + 65)).slice(0, n); 
};

console.log(retornarAlfabeto(5));

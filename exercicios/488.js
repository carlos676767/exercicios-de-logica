//promise

//sucess 
//pendente
//falha

const somar = (a, b, callbsack) => {
    callbsack(a + b)
}

somar(5, 5, callbsack => {
    console.log(callbsack);
})
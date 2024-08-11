function alphabetPosition(text) {
    const myArr = text.toLowerCase().replaceAll(/[^a-zA-Z]/g, '').split("")
    const alfaBeto = Array.from(Array(26).keys()).map(data =>  String.fromCharCode(data + 97) ) 
    return myArr.map(data =>  alfaBeto.indexOf(data) + 1).toString().replaceAll(/,/g, " ")
}


console.log(alphabetPosition("carlos"));// '0 25 15' to equal '25 15'
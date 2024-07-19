function XO(str) {
    const myArr = str.split("").filter(data => data == 'x' || data === 'X' || data === 'o' || data === 'O')
    if (myArr == 0){
        return true
    }
}
console.log(XO("xxo"));
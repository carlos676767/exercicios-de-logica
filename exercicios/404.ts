function createPhoneNumber(numbers: number[]){
    const converterEmString = numbers.join("")
    const telefoneRgex = new RegExp(/^(\d{3})(\d{3})(\d{4})$/)
    const converter = converterEmString.replace(telefoneRgex, "($1) $2-$3")
    return converter
}


console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
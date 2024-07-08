function pigIt(str) {
    const array = str.split(' ')
    const myCopy = [...array].map(data => data.charAt().concat('ay'))
    return { array, myCopy }
}

console.log(pigIt('Pig latin is cool'))// igPay atinlay siay oolcay

const palavra = 'carlos'.substring(1)
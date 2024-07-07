function highAndLow(numbers){
    const arr = numbers.split(' ').sort((a,b) => a -b)
    return  [...arr.pop() ,...arr.shift()].join(' ')
}

console.log(highAndLow("1 2 3 4 5"))
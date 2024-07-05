function converterString(str) {
    return str.split('').map(data => data + data.charCodeAt(0)).join('')
}

console.log(converterString('Hello'))
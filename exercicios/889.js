var removeVowels = function (str) {
    return str.toLowerCase()
    .split('')
    .filter(data => !["a", "e", "i", "o", "u"]
    .includes(data)).join('')
};


console.log(removeVowels("drake"))
function narcissistic(value) {
    const numeroEmString = String(value);

    const soma = numeroEmString.split("")
    .map(digit => Math.pow(Number(digit), numeroEmString.length))
        .reduce((acc, curr) => acc + curr, 0);

    return soma === value;
}

module.exports = narcissistic;
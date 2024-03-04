function sortByLength(array) {
    return array.sort((a, b) => a.length - b.length);
}

const teste = ["Telescopes", "Glasses", "Eyes", "Monocles"];
console.log(sortByLength(teste));

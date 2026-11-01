function points(games) {
    return games.map((c) => c.split(``).filter((c) => {
        return c != `:`
    })).flat().map((c, index, arr) => {
        if (index % 2 !== 0) return 0

        const converterNumber = Number(c)

        if (converterNumber > Number(arr[index + 1])) {
            return 3
        }

        if (converterNumber < Number(arr[index + 1])) {
            return 0
        }

        if (converterNumber == Number(arr[index + 1])) {
            return 1
        }
    }).reduce((a, b) => a + b, 0)
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

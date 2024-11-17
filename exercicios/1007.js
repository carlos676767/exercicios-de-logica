function findUniq(arr) {
    const count = {

    }

    arr.forEach(data => {
        !count[data] ? (count[data] = 1) : ++count[data];
    });

    return Number(Object.keys(count).find(data => count[data] === 1))
}


console.log(findUniq([1, 1, 1, 2, 1, 1]))
function comp(array1, array2) {

    if (Array.isArray(array2) && Array.isArray(array1)) {
        const eleverQuadrad = array1.map(data => data * data)
        return array2.every(num => eleverQuadrad.includes(num))
    }
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [121, 14641, 20736, 361, 25921, 361, 20736, 361]))
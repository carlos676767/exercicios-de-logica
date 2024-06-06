//passou
// const paginas = require("./503.js");
// test('adds 1 + 2 to equal 3', () => {
//     expect(paginas([1,2,3,4,5,6,8,9,10])).toBe(5);
// });=


// const notas = require("./504")
// test("olhar medias", () => {
//     const array1 = [4, 2, 9, 8, 2, 6, 5, 8, 1, 20, 5, 1, 59, 84, 4, 4, 12, 56, 1, 6];
//     const array2 = [4, 33, 20, 1, 19, 23, 9, 20, 12, 27, 16, 45, 5, 9, 7, 20, 14, 15, 9, 25];
//     const expected = [ 4, 20.6, 15.6, 3.8, 12.2, 16.2,  7.4, 15.2, 7.6, 24.2, 11.6, 27.4, 26.6,  39,  5.8, 13.6, 13.2, 31.4, 5.8, 17.4 ]
//     expect(notas(array1, array2)).toEqual(expected);
// })

const valoresUnicos = require("./506")

test("valores unicos", () => {
    const inicio =  [45, 2, 9, 8, 3, 85, 45, 3, 9, 25, 0, 7,45,45,45,85,85,7]
    const resultado = [45, 2, 9, 8, 3, 85, 25, 0, 7]
    expect(valoresUnicos(inicio)).toStrictEqual(resultado)
})


const capitalize = require("../874")


describe("Test para com base no indice colocar em maiscula", () => {
  test("trocar palaras e colicar maisculas", () => {
    expect(capitalize("abcdef", [1, 2, 5])).toBe("aBCdeF");
  });

  test("trocar palaras e colicar maisculas", () => {
    expect(capitalize("abcdef", [1, 2, 5, 100])).toBe("aBCdeF");
  });



  
});
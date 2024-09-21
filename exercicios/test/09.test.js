const narcissistic = require("../862");
//tdd 
describe("Teste de números narcisistas", () => {
  test("153 é um número narcisista", () => {
    expect(narcissistic(153)).toBeTruthy();
  });

  test("370 é um número narcisista", () => {
    expect(narcissistic(370)).toBeTruthy();
  });

  test("9474 é um número narcisista", () => {
    expect(narcissistic(9474)).toBeTruthy();
  });
});



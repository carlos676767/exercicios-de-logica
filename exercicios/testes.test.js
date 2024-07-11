const century = require("./639");


test('testes', () => {
  expect(century(1705)).toBe(18);
  expect(century(1900)).toBe(19);
  expect(century(2024)).toBe(21);
});

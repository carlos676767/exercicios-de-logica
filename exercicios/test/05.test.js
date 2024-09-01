const isPalindrome = require("../828");

test("is palindromo ?", () => {
  expect(isPalindrome("Abba")).toBeTruthy();
});

test("is palindromo ?", () => {
  expect(isPalindrome("a")).toBeTruthy();
});

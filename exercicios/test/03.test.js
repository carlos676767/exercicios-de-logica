const hamming = require("../824")

test("hamming test", () => {
  expect(hamming("I like turtles", "I like turkeys")).toBe(3);
});


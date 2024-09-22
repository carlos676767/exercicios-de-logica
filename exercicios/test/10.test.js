
const inArray = require("../868");
describe("retornar substring de substring", () => {
  test("valor substring", () => {
    expect(inArray(["lively", "alive", "harp", "sharp", "armstrong"], ["xyz", "live", "strong"])).toBe(["live", "strong"]);
  });

  test("strings sem correspondências", () => {
    expect(inArray(["tarp", "mice", "bull"], ["lively", "alive", "harp", "sharp", "armstrong"])).toBe([]);
  });

  test("substrings de caracteres únicos", () => {
    expect(inArray(["a", "b", "c"], ["abc", "def", "ghi"])).toBe (["a", "b", "c"]);
  });

  test("array a1 vazio", () => {
    expect(inArray([], ["lively", "alive"])).toBe([]);
  });

  test("array a2 vazio", () => {
    expect(inArray(["teste"], [])).toBe([]);
  });

  test("substrings duplicadas em a1", () => {
    expect(inArray(["live", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"])).toBe (["live", "strong"]);
  });

  test("substrings complexas", () => {
    expect(inArray(["arm", "strong", "sharp"], ["lively", "alive", "harp", "sharp", "armstrong"])).toBe (["arm", "sharp", "strong"]);
  });
});

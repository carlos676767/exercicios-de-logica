const httpRequest = require("../826")



test("testando asnyc", async() => {
    const data = await httpRequest()
    expect(data).toBe(1)
})
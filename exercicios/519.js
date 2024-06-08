const emittes = require("events")
const eventsEmiiter = new emittes()

eventsEmiiter.on("l", () => {
    console.log('ola mundo');
})
console.log('ola');

eventsEmiiter.emit("l")

console.log('lula');
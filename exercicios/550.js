
const palavra = "http://www.kx8bizus7znswm84.biz/default.html"
const regex = '^(?:http[s]?://)?(?:www\.)?([^/.]+)'
const str = palavra.match(regex)[1]
console.log(str);
function alphabetPosition(text) {
    const arr = []
    const separarString = text.replace(/[^a-zA-Z]/g, '').toLowerCase().split("")
    .filter(data => data !== " " && data!== ".")
    for (let i = 97; i < 122; i++) arr.push(String.fromCharCode(i))
    const str = separarString.map(data => arr.indexOf(data))
    return str.join(" ") 
  }
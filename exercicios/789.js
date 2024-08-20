function toCamelCase(str) {
    const letraIndice0 = str[0]
   return str === "" ? "" :
   str.split("-")
   .map(data => data[0]
   .toUpperCase() + data.slice(1))
   .join("")
   .replace(/[-_]/g, '').replace(letraIndice0, letraIndice0)
  }
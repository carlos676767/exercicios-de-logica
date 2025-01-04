class AbbrevName {
    static abbrevName(char){
      return char.split(` `).map(data => data[0].toUpperCase()).join(`.`)
    }
}

console.log(AbbrevName.abbrevName("Sam Harris"));

class Digitize{
    static digitize(string){
      return String(string).split(``)
      .reverse().map(char => Number(char))
    }
  }
  
  console.log(Digitize.digitize(35231))
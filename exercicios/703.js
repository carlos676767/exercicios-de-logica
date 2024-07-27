function pigIt(str){
  const palavra =  str.split(" ").map(data =>  data.slice(1) + data.charAt(0) + "ay").join(" ")
  return palavra.replace(/\bay\b/g, "")
}

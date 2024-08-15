decodeMorse = function (morseCode) {
    const codigoMorse = { '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E', '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J', '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O', '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T', '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y', '--..': 'Z', }
    const myMorse = morseCode.split(" ").map(data => codigoMorse[data] || "").join(" ").split(" ")
    let value = ""
    for (let i = 0; i < myMorse.length; i++) {
      myMorse[i] === "" ?  value += " " : value += myMorse[i]
    }
    return value.split(" ").filter(data => data !== "").join(" ")
  }


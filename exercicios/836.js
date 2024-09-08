decodeMorse = function (morseCode) {
    return morseCode.split(" ")
      .map(data => MORSE_CODE[data] || " ")
      .join("").split(" ")
    .filter(data => data != "").join(" ")
}

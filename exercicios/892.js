function createPhoneNumber(numbers) {
  const numberArray = [...numbers];
  const areaCode = numberArray.slice(0, 3).join(""); // Pega os 3 primeiros números para o código de área

  const formattedAreaCode = "(" + areaCode + ")"; // Formata o código de área com parênteses
  const firstThreeDigits = numberArray.slice(3, 6).join("") + "-"; // Pega os próximos 3 números

  const lastFourDigits = numberArray.slice(6).join(""); // Pega os últimos 4 números

  return formattedAreaCode + " " + firstThreeDigits + lastFourDigits; //junta os valores
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))
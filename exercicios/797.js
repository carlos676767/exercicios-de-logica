function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Name too short";
  }

  const vogais = ["a", "e", "i", "o", "u"];
  const quartaLetra = name[3];

  if (!vogais.includes(quartaLetra)) {
    return name.slice(0, 4);
  }

  return name.slice(0, 3);
}

console.log(nicknameGenerator("Robert"));
console.log(nicknameGenerator("Jeannie"));

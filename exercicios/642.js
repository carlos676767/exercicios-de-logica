function areYouPlayingBanjo(name) {
  const nome = name.substr(0, 1);
  return nome == "r" || nome == "R"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("rla mundo"));

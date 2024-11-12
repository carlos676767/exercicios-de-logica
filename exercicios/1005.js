function isPangram(string) {
  const str = [...string].filter((data) => data !== " " && data !== ".");

  return new Set(str).size >= 26;
}

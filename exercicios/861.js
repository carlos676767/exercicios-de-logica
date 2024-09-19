function switcheroo(x) {
  return Array.from(x)
    .map((data) => {
      if (data == "a") return (data = "b");
      if (data == "b") return "a";
      return data;
    })
    .join("");
}

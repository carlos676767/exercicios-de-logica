function greet(name) {
  let a = name.split("");
  let j = [];
  a[0] = "Hello,";
  a[1] = name;
  a[2] = "how are you doing today?";
  j.push(a[0], a[1], a[2]);
  return j.join(" ");
}

console.log(greet("carlos"));

function switcheroo(x) {
  return Array.from(x)
    .map((data) => {
      if (data == "a") return (data = "b");
      if (data == "b") return "a";
      return data;
    })
    .join("");
}

console.log(switcheroo("acb")); //bca
console.log(switcheroo("aabacbaa")); //'bbabcabb'

//Dada uma sequência composta de letras a, b e/ou c,
//troque a posição das letras a e b (mude a para b e vice-versa).
//Deixe qualquer incidência de c intocada.

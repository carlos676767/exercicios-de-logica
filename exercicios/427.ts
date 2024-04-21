const transformarNomesEmBits = (nome: string) => {
  const transformarEmArray: string[] = Array.from(nome);
  const receberConversaoEmAsci: string[] = [];
  for (let i = 0; i < transformarEmArray.length; ++i) {
    const asci = transformarEmArray[i].charCodeAt(0);
    const converterEmbinario = asci.toString(2);
    receberConversaoEmAsci.push(converterEmbinario);
  }
  console.log(receberConversaoEmAsci.join(" "));
};

transformarNomesEmBits("carlos");

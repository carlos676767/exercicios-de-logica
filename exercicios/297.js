const municipio = () => {
  let votosBrancos = parseInt(prompt(`Digite o total de votos brancos`));
  let votosNulos = parseInt(prompt(`digite os votos nulos`));
  let votosValidos = parseInt(prompt(`Digite os votos validos`));
  const eleitores = () => {
    let totalVotos = votosBrancos + votosNulos + votosValidos;
    let pecentualBrancos = (votosBrancos / totalVotos) * 100;
    let pecentualNulos = (votosNulos / totalVotos) * 100;
    let pecentualValidos = (votosValidos / totalVotos) * 100;
    alert(
      `O PECENTUAL DE VOTOS BRANCO COM BASE NO TOTAL DE VOTOS E ${pecentualBrancos}`
    );
    alert(
      `O PECENTUAL DE VOTOS NULOS COM BASE NO TOTAL DE VOTOS E ${pecentualNulos}`
    );
    alert(
      `O PECENTUAL DE VOTOS VALIDOS COM BASE NO TOTAL DE VOTOS E ${pecentualValidos}`
    );
  };
  eleitores();
};

municipio();

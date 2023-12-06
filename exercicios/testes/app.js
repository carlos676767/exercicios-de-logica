
function procurar() {
  let texto = document.querySelector(`p`);
  let ul = document.querySelector(`ul`);
  const input = document.querySelector(`input`).value;

  for (let i = 0; i < ul.children.length; i++) {
    let test = ul.children[i]
    if (test) {
      texto.textContent = ul
    }
  }
}
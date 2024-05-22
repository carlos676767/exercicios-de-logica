//new map e uma estrura de chave e valor que aceita varios valores

const mapa = new Map(); //cria o valor
mapa.set("nome", "joao"); //seta o valor.
mapa.set("idade", "25"); //add um valor.
mapa.has("nome"); //verifica o valor.
mapa.get("nome"); //pega minha propriedade e retorna o valor
mapa.delete("nome"); //deleta a chave
mapa.clear(); //ele apaga tudo
mapa.size; //ver o tamnho do size
class Cachorro {
  private nome: string;
  constructor(nome: string) {
    this.nome = nome;
  }

  public get getName() {
    return this.nome;
  }

  public set setName(name: string) {
    this.nome = name;
  }
  
}

const cachorro = new Cachorro("joao");
cachorro.setName = "carlos";
cachorro.setName = "joao";
console.log(cachorro.getName);

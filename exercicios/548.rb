class Carro
  def initialize(modelo, placa)
    this.modelo = modelo
    this.placa = placa
  end
end

obj = {
    nome: "carlos"
}

clonar = obj.clone()
puts clonar

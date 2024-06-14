class Pessoa 
  def initialize(nome, idade,peso)
    @nome = nome
    @idade = idade
    @peso = peso
  end
  def acao()
    puts "#{@nome} tem idade #{@idade} e tem peso #{@peso}"
  end
end


nova_pessoa = Pessoa.new("carlos", "20", "1.78")
nova_pessoa.acao()
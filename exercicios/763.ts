// Sistema de Alunos e Notas
// Construa um sistema para gerenciar alunos e suas notas:

// Aluno: com atributos como nome, matricula e uma lista de notas.
// Disciplina: com atributos como nome e codigo.
// Curso: com uma lista de disciplinas e uma lista de alunos matriculados.
// Crie métodos para calcular a média das notas dos alunos, adicionar e remover alunos e disciplinas.

class Aluno {
  private nome: string;
  private matricula: string;
  private notas: number[];
  constructor(nome: string, matricula: string) {
    this.nome = nome;
    this.matricula = matricula;
    this.notas = [];
  }

  public addNotesStudents(nota: number): void {
    this.notas.push(nota);
  }

  public getNotas(): number[] {
    return this.notas;
  }

  public getMatricula() {
    return this.matricula;
  }
}

class Disciplina {
  private nomeDisciplina: string;
  constructor(nomeDisciplina: string) {
    this.nomeDisciplina = nomeDisciplina;
  }

  getNomeDisciplina(){
    return this.nomeDisciplina
  }
  
}

class Curso {
  private disciplinasList: Disciplina[];
  private listAlunos: Aluno[];
  constructor(disciplinasList: Disciplina[], listAlunos: Aluno[]) {
    this.disciplinasList = disciplinasList;
    this.listAlunos = listAlunos;
  }

  public addAlunos(aluno: Aluno): void {
    this.listAlunos.push(aluno);
  }

  public removedAlunos(matricula: string) {
    const removedAlunos = this.listAlunos.filter( (aluno) => aluno.getMatricula() != matricula );
    this.listAlunos = removedAlunos
  }

  public mediaTurma() : number {
    const media = this.listAlunos.map(aluno => {
      const somaSoma = aluno.getNotas().reduce((acc: number, c: number) => {
        return acc + c
       }, 0)
       return somaSoma/aluno.getNotas().length
    })
    return media.reduce((a: number,c: number) => a + c) / this.listAlunos.length
  }

  public adicionarDisciplina(disciplina: Disciplina) {
    this.disciplinasList.push(disciplina)
  }

  public removedDisciplina(nome: string) : void {
    const removedDisciplina = this.disciplinasList.filter(disciplina => disciplina.getNomeDisciplina() != nome )
    const disciplineRemoved = this.disciplinasList = removedDisciplina
    console.log('apagado');
  }
}

const aluno = new Aluno('carlos', '44444')
const aluno2 = new Aluno("vini", '444444')
const disciplina = new Disciplina("linux")
const curso = new Curso([disciplina],[aluno])
curso.addAlunos(aluno2)
aluno.addNotesStudents(4)
aluno.addNotesStudents(2555)
aluno.getNotas()
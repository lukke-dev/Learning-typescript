export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
  }
  getNomeCompleto(): string {
    console.log('asdihasda');
    const result = super.getNomeCompleto();
    return result;
  }
}

export class Cliente extends Pessoa {
  getNomeCompleto(): string {
    return this.nome + ' CLIENTEEE' + this.sobrenome;
  }
}

const pessoa = new Pessoa('lucas', 'santos', 30, '089.176.0404-10');
const aluno = new Aluno('maria', 'santos', 30, '089.176.0404-10', '001');
const cliente = new Cliente('joao', 'santos', 30, '089.176.0404-10');

console.log(
  pessoa.getNomeCompleto(),
  aluno.getNomeCompleto(),
  cliente.getNomeCompleto(),
);

console.log(aluno);

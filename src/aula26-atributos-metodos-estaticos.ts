export class Pessoa {
  static idadePadrao = 0;
  static cpfPadrao = '000.000.000-00';
  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  metodoNormal(): void {
    console.log(Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }

  static criaPessoa(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('lucas', 'dos santos', 30, '123.456.899-10');
const pessoa2 = Pessoa.criaPessoa('luiz', 'miranda');
console.log(pessoa, pessoa2);
pessoa.metodoNormal();

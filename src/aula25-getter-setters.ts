export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(valor: string) {
    console.log('Setter chamado');
    this._cpf = valor;
  }

  get cpf(): string {
    console.log('getter chamado');
    return this._cpf.replace(/\D/g, '');
  }
}

const pessoa = new Pessoa('lucas', 'dos santos', 30, '123.456.899-10');
pessoa.cpf = '089.175.989-19';
console.log(pessoa.cpf);

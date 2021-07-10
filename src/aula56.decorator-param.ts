function decorator(
  classPrototype: any,
  nomeMetodo: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(index);
  return 'qlq coisa';
}
export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(
    @decorator nome: string,
    @decorator sobrenome: string,
    @decorator idade: number,
  ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(@decorator msg: string): string {
    return `${this.nome} ${this.sobrenome}: ${msg}`;
  }

  get nomeCompleto(): string {
    return this.nome + '' + this.sobrenome;
  }

  set nomeCompleto(valor: string) {
    const palavras = valor.split(/\s/g);
    const primeironome = palavras.shift();
    if (!primeironome) return;
    this.nome = primeironome;
    this.sobrenome = palavras.join(' ');
  }
}

const pessoa = new UmaPessoa('luiz', 'otavio', 30);
const m1 = pessoa.metodo('ola mundo');
console.log(m1);

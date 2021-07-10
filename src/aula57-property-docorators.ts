function decorator(classPrototype: any, nome: string | symbol): any {
  let valorProp: any;
  return {
    get: () => valorProp,

    set: (value: any) => {
      if (typeof value === 'string') {
        valorProp = value.split('').reverse().join('');
        return;
      }
      valorProp = value;
    },
  };
}

export class UmaPessoa {
  @decorator
  nome: string;
  @decorator
  sobrenome: string;
  @decorator
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }

  metodo(msg: string): string {
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

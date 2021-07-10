function decorator(
  classPrototype: any,
  nomeMetodo: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor {
  console.log(classPrototype);
  console.log(nomeMetodo);
  console.log(descriptor);
  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class UmaPessoa {
  nome: string;
  sobrenome: string;
  idade: number;

  constructor(nome: string, sobrenome: string, idade: number) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
  @decorator
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

const p1 = new UmaPessoa('luiz', 'otavio', 30);
const m1 = p1.metodo('e ai man');
console.log(m1);

interface Pessoa33 {
  nome: string;
}

interface Pessoa33 {
  readonly sobrenome: string;
}

interface Pessoa33 {
  readonly endereco: readonly string[];
}

interface Pessoa33 {
  readonly idade?: number;
}

const pessoa1: Pessoa33 = {
  nome: 'luiz',
  sobrenome: 'muranda',
  endereco: ['rua oscar fischer'],
};

pessoa1.nome = '';
console.log(pessoa1);

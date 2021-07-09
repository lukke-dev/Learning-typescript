interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  idade: U;
}

type PessoaProtocolo2<T = string, U = number> = {
  nome: T;
  sobrenome: T;
  idade: U;
};

const aluno: PessoaProtocolo<string, number> = {
  nome: 'luiz',
  sobrenome: 'miranda',
  idade: 30,
};

const aluno1: PessoaProtocolo<number, number> = {
  nome: 123,
  sobrenome: 456,
  idade: 30,
};

const aluno2: PessoaProtocolo2 = {
  nome: 'luiz',
  sobrenome: 'miranda',
  idade: 30,
};
console.log(aluno);
console.log(aluno1);
console.log(aluno2);

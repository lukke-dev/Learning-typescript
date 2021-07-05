type Idade = number;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  cor?: string;
};

type CorRGB = 'vermelho' | 'amarelo' | 'azul';
type CorCMYK = 'ciano' | 'magenta' | 'verde' | 'preto';
type Cor = CorRGB | CorCMYK;

const people: Pessoa = {
  idade: 30,
  nome: 'luiz',
  salario: 200_200,
};

export function setCorPreferida(people: Pessoa, cor1: Cor): Pessoa {
  return { ...people, cor: cor1 };
}

console.log(setCorPreferida(people, 'azul'));

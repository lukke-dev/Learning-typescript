//              K é no maximo, uma chave de O - constraints
type ObterChave = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChave = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina1', 'vacina2'],
  idade: 10,
};

const vacias = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log(vacias, cor, obterChave(animal, 'idade'));

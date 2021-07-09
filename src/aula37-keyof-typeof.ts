type CoresObj = typeof coresObj;
type CoresKeys = keyof CoresObj;

const coresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
  roxo: 'purple',
};

function traduzir(cor: CoresKeys, cores: CoresObj) {
  return cores[cor];
}

console.log(traduzir('roxo', coresObj));

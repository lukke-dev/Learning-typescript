let x = 10; // eslint-disable-line
x = 0b1010;
const y = 10;
let a = 100 as const; // eslint-disable-line

const people = {
  name: 'luiz' as const,
  lastname: 'muranda',
};

function changeColor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

console.log(changeColor('Amarelo'));
//module mode
export default 1;

enum Cores {
  VERMELHO = 10, //0
  AZUL = 100, //1
  AMARELO = 200, //2
}

enum Cores {
  ROXO = 'ROXO',
  VERDE = 201,
  ROSA,
}

// console.log(Cores.VERMELHO);
// console.log(Cores[10]);
// console.log(Cores);

export function changeColor(cor: Cores): void {
  console.log(Cores[cor]);
}

changeColor(1234);

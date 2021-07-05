/* eslint-disable */

// Tipos básicos ( aqui ocorre inferência de tipos)
let nome: string = 'luiz'; // Qualquer tipo de strings: '' "" ``
let idade: number = 30; // 10, 1.57, -5.55 0xf00d, 0b1010
let adulto: boolean = true; // true ou false
let simbolo: symbol = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays

let ArrayOfNumbers: Array<number> = [1, 2, 3];
let ArrayOfNumbers2: number[] = [1, 2, 3];
let ArrayOfStrings: Array<string> = ['a', 'b'];
let ArrayOfStrings2: string[] = ['a', 'b'];

// Objetos

let pessoa: {nome: string, idade: number, adulto?: boolean} = {
  idade: 30,
  nome: 'Lucas'
};

// Funções

function soma(x: number, y: number) {
  return x+ y;
}

const soma2: (x: number, y: number) => number = (x, y) => x+y;

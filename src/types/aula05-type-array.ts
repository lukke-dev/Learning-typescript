// Array<T> = T[]

function multipleArgs(...args: Array<number>): number {
  return args.reduce((ac, value) => ac * value, 1);
}

export function concatArgs(...args: string[]): string {
  return args.reduce((ac, value) => ac + value);
}

export function UpperCase(...args: string[]): string[] {
  return args.map((valor) => valor.toUpperCase());
}

const result = multipleArgs(1, 2, 3);
const concat = concatArgs('a', 'b', 'c');
const upper = UpperCase('a', 'b', 'c');
console.log(result);
console.log(concat);
console.log(upper);

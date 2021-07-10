@decorator
export class Animal {
  constructor(public nome: string, public cor: string) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T) {
  return class extends target {
    nome: string;
    cor: string;

    constructor(...args: any[]) {
      super(...args);
      this.nome = args[0].split('').reverse().join('');
      this.cor = args[1].split('').reverse().join('');
    }

    inverte(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// const AnimalDecorated = decorator(Animal);
// const animal = new AnimalDecorated('luiz', 'roxo');
const animal = new Animal('luiz', 'roxo');
console.log(animal);

function inverteNomeCor(par1: string, par2: string) {
  // Closure
  return function <T extends new (...args: any[]) => any>(target: T): T {
    console.log('Sou o decorador e recebi', target);

    return class extends target {
      nome: string;
      cor: string;

      constructor(...args: any[]) {
        super(...args);
        this.nome = this.inverte(args[0]);
        this.cor = this.inverte(args[1]);
      }

      inverte(value: string): string {
        return value.split('').reverse().join('') + par1 + par2;
      }
    };
  };
}

@inverteNomeCor('FDFDSF', 'valor2')
export class Animal {
  constructor(public nome: string, public cor: string) {
    console.log('Sou a classe');
  }
}
// const AnimalDecorated = decorator(Animal);
// const animal = new AnimalDecorated('luiz', 'roxo');
const animal = new Animal('luiz', 'roxo');
console.log(animal);

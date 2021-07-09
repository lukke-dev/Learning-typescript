// public é redundante
export class Empresa {
  public readonly nome: string; // public não necessario
  private readonly colaboradores: Colaborador[] = [];
  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  addColab(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  showColab(): void {
    for (const colab of this.colaboradores) {
      console.log(colab);
    }
  }
}
// no atalho, preciso usar o public
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('udemy', '089.98998.92893-20');

const colaborador1 = new Colaborador('lucas', 'santos');
const colaborador2 = new Colaborador('maria', 'vieira');
const colaborador3 = new Colaborador('joao', 'das silva');
empresa1.addColab(colaborador1);
empresa1.addColab(colaborador2);
empresa1.addColab(colaborador3);
console.log(empresa1.nome, empresa1);

// ligação masi fraca entre classes
export class Escritor {
  private _ferramenta: Ferramenta | null = null;

  constructor(private _nome: string) {}

  get nome(): string {
    return this._nome;
  }

  set ferramenta(ferramenta: Ferramenta | null) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): Ferramenta | null {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('não posso escrever sem ferramenta');
    } else {
      this.ferramenta.escrever();
    }
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const escritor = new Escritor('luiz');
const caneta = new Caneta('bic');
const maquina = new MaquinaEscrever('maquinaesc');

// console.log(escritor.nome);
// console.log(caneta.nome);
// console.log(maquina.nome);

escritor.ferramenta = caneta;
escritor.ferramenta = maquina;
escritor.ferramenta = null;
escritor.escrever();

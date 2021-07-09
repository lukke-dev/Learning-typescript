// this polimorfico
export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;
    return this;
  }

  sub(n: number): this {
    this.numero -= n;
    return this;
  }

  div(n: number): this {
    this.numero /= n;
    return this;
  }

  mul(n: number): this {
    this.numero *= n;
    return this;
  }
}

export class SubCalc extends Calculadora {
  pow(n: number): this {
    this.numero **= n;
    return this;
  }
}
const calc = new SubCalc(10);

console.log(calc.mul(15).pow(2));

// Builder - Gang of Four
export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();

request.setUrl('google.com').setMethod('post').send();

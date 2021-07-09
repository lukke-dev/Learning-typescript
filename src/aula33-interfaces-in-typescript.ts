interface Nome {
  nome: string;

  // nomeCompleto(): string;
}

interface Sobrenome {
  sobrenome: string;
}

type NomeCompleto = {
  nomeCompleto(): string;
};

type TypePeople = Nome & Sobrenome & NomeCompleto;
interface TypePeople2 extends Nome, Sobrenome, NomeCompleto {}

export class Pessoa implements TypePeople2 {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaObj: TypePeople = {
  nome: 'lucas',
  sobrenome: 'agora ta ok',

  nomeCompleto() {
    return this.nome + ' ' + this.sobrenome;
  },
};

const pessoa10 = new Pessoa('luiz', 'miranda');
console.log(pessoa10.nomeCompleto());
console.log(pessoaObj.nomeCompleto());

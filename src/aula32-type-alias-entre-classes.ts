type Nome = {
  nome: string;

  // nomeCompleto(): string;
};

type Sobrenome = {
  sobrenome: string;
};

type NomeCompleto = {
  nomeCompleto: () => string;
};

class Pessoa implements Nome, Sobrenome, NomeCompleto {
  constructor(public nome: string, public sobrenome: string) {}

  nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa10 = new Pessoa('luiz', 'miranda');
console.log(pessoa10.nomeCompleto());

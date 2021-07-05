function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'luiz',
  sobrenome: 'otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('luiz', 'otavio');
pessoa.exibirNome();

export { pessoa };

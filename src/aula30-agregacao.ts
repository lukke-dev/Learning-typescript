export class Carrinho {
  private readonly produtos: Produto[] = [];

  inserirProduto(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  qtdProd(): number {
    return this.produtos.length;
  }

  vlrTot(): number {
    return Number(
      this.produtos
        .reduce((soma, produto) => soma + produto.preco, 0)
        .toFixed(2),
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('camiseta', 59.9434343);
const produto2 = new Produto('caneca', 29.9);
const produto3 = new Produto('caneta', 5.9);

const carrinho = new Carrinho();
carrinho.inserirProduto(produto1, produto2, produto3);
console.log(carrinho.qtdProd());

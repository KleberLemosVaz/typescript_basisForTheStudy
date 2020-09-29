export class CarrinhoDeCompras {
    private readonly produtos: Produto[] = [];

    inserirProdutos(...produtos: Produto[]): void{
        for (const produto of produtos){
            this.produtos.push(produto);
        }
    }

    quantidadeProdutos(): number {
        return this.produtos.length;
    }

    valorTotal(): number {
        return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
    }
}

export class Produto {
    constructor(public nome: string, public preco: number) {}
}

const tshirt = new Produto('Camiseta', 39.90);
const jeans = new Produto('Calça', 99.90);

const carrinhoDeCompras = new CarrinhoDeCompras();

carrinhoDeCompras.inserirProdutos(tshirt, jeans);

console.log(carrinhoDeCompras);
console.log(carrinhoDeCompras.quantidadeProdutos());
console.log(carrinhoDeCompras.valorTotal());
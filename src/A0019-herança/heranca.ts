export class Pessoa {
    constructor(
        public nome: string,
        public sobrenome: string,
        private idade: number,
        protected cpf: string,
    ) {}

    getIdade(): number {
        return this.idade;
    }

    getCpf(): string {
        return this.cpf;
    }

    getNomeCompleto(): string {
        return this.nome + ' ' + this.sobrenome;
    }
}

export class Aluno extends Pessoa {

    constructor(
        nome: string,
        sobrenome: string,
        idade: number,
        cpf: string,
        public sala: string,
    ) {
        super(nome, sobrenome, idade, cpf);

    }
    getNomeCompleto(): string {
        console.log('Chamando isso antes da super');
        return super.getNomeCompleto();
    }
}
export class Cliente extends Pessoa {
    getNomeCompleto(): string {
        return 'Isso vem do cliente ' + this.nome + ' ' + this.sobrenome;
    }
}

const aluno = new Aluno('Kleber', 'Lemos', 30, '111.111.111-00', '1m2');
const cliente = new Cliente('Kleber', 'Lemos', 30, '111.111.111-00');
const pessoa = new Pessoa('Kleber', 'Lemos', 30, '111.111.111-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());
console.log(aluno);

export class Pessoa {
    static idadePadrao = 0;
    static cpfPadrao = '0'

    constructor(
        public nome: string,
        public sobrenome: string,
        public idade: number,
        public _cpf: string,
    ) {}

    static criaPessoa(nome: string, sobrenome: string): Pessoa {
        return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
    }
}

const pessoa1 = new Pessoa('Kleber', 'Lemos', 30, '111.111.111-00');
const pessoa2 = Pessoa.criaPessoa('Lucas', 'Vaz');

console.log(pessoa1);
console.log(pessoa2);

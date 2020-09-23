export class Pessoa {
    constructor(
        private nome: string,
        private sobrenome: string,
        private idade: number,
        private _cpf: string,
    ) {}

    set cpf(cpf: string) {
        console.log('calling setter');
        this._cpf = cpf;
    }

    get cpf(): string {
        console.log('calling getter');
        return this._cpf.replace(/\D/g,'');
    }
}

const pessoa = new Pessoa('Kleber', 'Lemos', 30, '111.111.111-00');

pessoa.cpf = '222.222.222-22';
console.log(pessoa.cpf);

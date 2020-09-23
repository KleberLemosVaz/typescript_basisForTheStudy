export class Escritor {
    private _ferramenta: Ferramenta | null = null;

    constructor(private _nome: string) {}

    get nome(): string {
        return this._nome;
    }

    set ferramenta(ferramenta: Ferramenta) {
        this._ferramenta = ferramenta;
    }

    get ferramenta(): Ferramenta | null {
        return this._ferramenta;
    }

    escrever(): void {
        if (this.ferramenta === null) {
            console.log('Não posso escrever sem ferramenta...');
            return;
        }
        this.ferramenta.escrever();
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
        console.log(`Escrevendo com a minha caneta ${this.nome}...`);
    }
}

export class Notebook extends Ferramenta {
    escrever(): void {
        console.log(`Escrevendo no meu notebook ${this.nome}...`);
    }
}

const escritor = new Escritor('Kleber');
const caneta = new Caneta('Bic');
const notebook = new Notebook('MacPro');


escritor.escrever();
escritor.ferramenta = caneta;
escritor.escrever();
escritor.ferramenta = notebook;
escritor.escrever();

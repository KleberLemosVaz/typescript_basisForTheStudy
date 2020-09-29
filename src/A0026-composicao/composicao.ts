export class Carro {
    public readonly motor = new Motor();

    ligar(): void {
        this.motor.ligar();
    }

    acelerar(): void {
        this.motor.acelerar();
    }

    parar(): void {
        this.motor.parar();
    }

    desligar(): void {
        this.motor.desligar();
    }
}

export class Motor {
    ligar(): void {
        console.log('Motor ligado...vrum vrum');
    }

    acelerar(): void {
        console.log('Motor acelerando...vrummmmmmmm vrummmmmmmm');
    }

    parar(): void {
        console.log('Motor parado...');
    }

    desligar(): void {
        console.log('Motor desligado')
    }
}

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.desligar();

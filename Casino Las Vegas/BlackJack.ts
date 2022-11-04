import { Casino } from "./Casino";
export class BlackJack {
    protected carta: number[];
    protected apuestaMinima: number;
    protected blackJack: number;
    constructor() {
        this.carta = [];
        this.apuestaMinima = 1500;
        this.blackJack = 21;
    }

    private obtenerApuestaMinima(): number {
        return this.apuestaMinima;
    }
    private ingresarApuesta(): number {
        let ingresoApuesta = require('readline-sync');
        console.log('La puesta miníma para este juego es' + '\n' + '# ' + this.obtenerApuestaMinima() + '\n');
        let nuevaApuesta: number = 0;
        nuevaApuesta = Number(ingresoApuesta.question('Ingresar apuesta ===> ' + '\n'));
        switch (nuevaApuesta) {
            case 1:
                if (nuevaApuesta >= this.apuestaMinima) {
                    console.log('Apuesta ingresada $ ' + nuevaApuesta + '\n');
                }
                break;

            case 2:
                if (nuevaApuesta < this.apuestaMinima) {
                    console.log('La apuesta minima es $ ' + this.apuestaMinima + '\n');
                }
                break;

            default:
                break;
        }
        return nuevaApuesta;

    }

    
    private repartir(): number[] {
    let cartas: number[] = new Array;
    cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
    cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
    return cartas;

}
    private nuevaCarta(): number {
    let cartaNueva: number;
    cartaNueva = (Math.floor(Math.random() * (10 - 1) + 1));
    return cartaNueva;

}
    private obtenerResultado(): number {
    let contador: number = 0;
    for (let i: number = 0; i < this.carta.length; i++) {
        contador += this.carta[i];
    }
    return contador;
}
    private primeraMano(): void {
    while(this.ingresarApuesta() >= this.obtenerApuestaMinima()){
    let opcion = require('readline-sync');
    let as: number = -1;
    let asVariante: number = 11;
    this.carta = this.repartir();
    console.log('°°°° Su mano °°°°' + '\n' + '#  ' + this.carta + '\n' + '=-=-= Resultado =-=-=' + '\n' + '#  ' + this.obtenerResultado() + '\n');
    let pedirCarta: number = 1;
    let cartaNueva: number;
    let aux: number = 0;
    while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
        cartaNueva = this.nuevaCarta();
        console.log('=-=-= Su carta es =-=-=' + '\n' + '# ' + cartaNueva + '\n');
        if (cartaNueva === 1) {
            console.log('*=*=*=* Saco un AS ' + cartaNueva + ' *=*=*=* ' + '\n' + '*=*=*=* Puede elegir 2 opciones *=*=*=*' + '\n');
            console.log('Opción 1 se restara 1 del total de su mano' + '\n' + 'Opción 2 se sumaran 11 al total de su mano');
            aux = Number(opcion.question('Restar ===> 1' + '\n' + 'Sumar ===> 2' + '\n'));
            if (aux === 1) {
                cartaNueva = as;
            } else {
                cartaNueva = asVariante;
            }
        }
        this.carta.push(cartaNueva);
        console.log('=-=-= Resultado =-=-=' + '\n' + '# ' + this.obtenerResultado() + '\n');
        if (this.obtenerResultado() < this.blackJack) {
            let crupier: string = 'Crupier';
            pedirCarta = Number(opcion.question('- ' + crupier + '\n' + 'Desea una nueva carta?' + '\n' + 'Nueva Carta ===> 1' + '\n' + 'Pararse ===> 2' + '\n'));
        }
    }
    if (this.obtenerResultado() === this.blackJack) {
        console.log('*=*=*=*FELICITACIONES=*=*=*' + '\n' + '*=*=*=*Saco un black Jack=*=*=*' + '\n');
    } else if (this.blackJack < this.obtenerResultado()) {
        console.log('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' +!=!=!' + '\n');

    }
}
    }
    public jugar(): void {
    this.ingresarApuesta();
    this.primeraMano();
}

}

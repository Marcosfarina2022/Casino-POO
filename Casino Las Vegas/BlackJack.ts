import { Module } from "module";
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

    public ingresarApuesta(): void {
        let opcionApuesta = require('readline-sync');
        let nuevaApuesta: number = 0;
        console.log('La apuesta miníma para este juego es' + '\n' + '$' + this.obtenerApuestaMinima() + ' ' + 'Pesos' + '\n');
        let ingresoDeApuesta = Number(opcionApuesta.question('Desea ingresar apuesta?  SI ==> 1  ||  NO ==> 2  ' + '\n'));
        switch (ingresoDeApuesta) {
            case 1:
                nuevaApuesta = Number(opcionApuesta.question('Ingresar apuesta ===> ' + '\n'));
                if (nuevaApuesta >= this.apuestaMinima) {
                    this.primeraMano();
                } else {
                    console.log('Apuesta insuficiente' + '\n');
                    this.ingresarApuesta();
                }

            case 2:
                console.log('Gracias por elegir Black Jack, va a salir del juego.');
                break;
        }
    }


    private obtenerApuestaMinima(): number {
        return this.apuestaMinima;
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

            if (this.obtenerResultado() === this.blackJack) {
                console.log('*=*=*=*FELICITACIONES=*=*=*' + '\n' + '*=*=*=*Saco un black Jack=*=*=*' + '\n');
            } else if (this.blackJack < this.obtenerResultado()) {
                console.log('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' !=!=!' + '\n');
            }



        }
    }
    public jugar(): void {
        this.ingresarApuesta();
    }

}

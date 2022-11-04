import { Casino } from "./Casino";
import * as RLS from "readline-sync";
import { clear } from "console";
export class BlackJack {
    protected carta: number[];
    protected apuestaInicial: number;
    protected blackJack: number;
    constructor() {
        this.carta = [];
        this.apuestaInicial = 3000;
        this.blackJack = 21;
    }
    public obtenerApuestaInicial(): number {
        return this.apuestaInicial;
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
        let salir: number = 0;
        let as: number = -1;
        let asVariante: number = 11;
        this.carta = this.repartir();
        console.log('Primera mano ' + this.carta + '\n' + 'Su total es ' + this.obtenerResultado() + '\n');

        let pedirCarta = 1;
        let cartaNueva: number;
        let aux: number = 0;
        while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
            cartaNueva = this.nuevaCarta();
            console.log('su carta es ' + cartaNueva + '\n');
            if (cartaNueva === 1) {

                aux = Number(opcion.question('Saco un AS, puede elegir si desea sumar o restar del total de su mano || oprimar 1 para sumar 11 || oprimar 2 para restar 1' + '\n'));
                if (aux === 1) {
                    cartaNueva = asVariante;
                } else {
                    cartaNueva = as;
                }
            }
            this.carta.push(cartaNueva);
            console.log(this.obtenerResultado());
            if (this.obtenerResultado() < this.blackJack) {
                pedirCarta = Number(opcion.question('Quiere una carta nueva presione 1 = si || 2 = no' + '\n'));
            }
        }
        if (this.obtenerResultado() === this.blackJack) {
            console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
        } else if (this.blackJack < this.obtenerResultado()) {
            console.log('Usted perdio, supero 21');

        }

    }







    public jugar(): void {
        this.primeraMano();
    }

}

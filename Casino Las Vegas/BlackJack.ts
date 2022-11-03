import { Casino } from "./Casino";
import * as RLS from "readline-sync";
export class BlackJack {
    protected carta: number[];
    protected resultado: number;
    protected apuestaInicial: number;
    protected blackJack: number;
    constructor() {
        this.carta = [];
        this.resultado = 0;
        this.apuestaInicial = 3000;
        this.blackJack = 21;
    }
    public obtenerApuestaInicial(): number {
        return this.apuestaInicial;
    }
    private repartir(): number {
        return Math.floor((Math.random())*(11 - 1 + 1) + 1);
    }

    private primeraMano(): void {
        let opcion = require('readline-sync');
        let ingresar: number = 1;
        let as: number = 1;
        let asVariante: number = 11;
        if (ingresar === 1) {
            ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n'));
            this.repartir();
            for (let i: number = 0; i < 2; i++) {
                if (this.resultado < this.blackJack) {
                    this.carta.push(this.carta[i]);
                    this.resultado += this.carta[i];
                }
                console.log('Primera mano ' + this.carta[i]);
            }
            console.log('Total de la mano ' + this.resultado);
            let pedirCarta: string = RLS.question('----Ingrese una opcion: ' + '\n' + '1- pedir otra carta---- ' + '\n' + '2- salir del juego----' + '\n');       
            switch (pedirCarta) {
                case "1":
                    for (let i: number = 0; i < 1; i++) {
                        let opcion1: string = RLS.question('tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n');            
                        if (this.carta[i] === as) {
                            opcion1 === '1';
                            this.resultado -= as;
                            console.log('Se resto 1 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                        } else {
                            opcion1 === '2';
                            this.resultado += asVariante;
                            console.log('Se sumo 11 del total de su mano' + '\n' + 'Resultado: ' + this.resultado)
                        }
                        if (this.resultado === this.blackJack) {
                            console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
                        } else if (this.blackJack < this.resultado) {
                            console.log('Usted perdio');
                        }
                        else {
                            console.log("Se terminaron sus intentos");
                        }

                    }
                    this.resultado === 0;

                    break;

                case "2":
                    console.log("salir");
                    break;
            }

        }

    }


    public jugar(): void {

        this.primeraMano();
        this.resultado==0;

    }

}










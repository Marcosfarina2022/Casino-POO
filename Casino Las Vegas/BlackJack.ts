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
        return Math.floor(Math.random() * 11 - 1) + 1;
    }
    private primeraMano(): void {
        let opcion = require('readline-sync');
        let ingresar: number = 1;
        if (ingresar === 1) {
            ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n'));
            for (let i: number = 0; i < 2; i++) {
                if (this.resultado < this.blackJack) {
                    this.repartir();
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
            this.segundaMano();

        }

    }

    public segundaMano(): void {
        //let opcion1:number=1;
        let pedirOtraCarta: number = 2;
        let as: number = 1;
        let asVariante: number = 11;
        let pedirCarta: string = RLS.question("----Ingrese una opción: --- 1 - pedir otra carta---- ||--- 2 - salir del juego----- \n");
        switch (pedirCarta) {
            case "1":
                if (this.resultado < this.blackJack) {
                    for (let i: number = 0; i < 1; i++) {
                        this.resultado = this.carta[i];
                    }
                    console.log("gracias por la carta")

                }/* else if (this.carta === as) {
                }*/

                break;

            case "2":
                console.log("salir");
                break;
        }

    }

    public jugar(): void {

        this.primeraMano();

    }

}










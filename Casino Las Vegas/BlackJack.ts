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
                }
                console.log('Primera mano ' + this.carta[i]);
            }
            console.log('Total de la mano ' + this.resultado);
            let pedirOtraCarta: number = 2;
            let as: number = 1;
            let asVariante: number = 11;
            let pedirCarta: string = RLS.question('----Ingrese una opcion: ' + '\n' + '1- pedir otra carta---- ' + '\n' + '2- salir del juego----' + '\n');
            let opcion1: string = RLS.question('Ha sacado un AS '+ '\n' + 'tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n');
            switch (pedirCarta) {
                case "1":
                        for (let i: number = 0; i < 1; i++) {
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
                            }else if( this.blackJack < this.resultado){
                                console.log('Usted perdio');
                            }
                            this.resultado = 0;

                        }
                    
                    
    
                    break;
    
                case "2":
                    console.log("salir");
                    break;
            }
    
        }
    
        }
    
  

    public segundaMano(): void {
        
 }
    public jugar(): void {

        this.primeraMano();

    }

}










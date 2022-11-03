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
        return Math.floor((Math.random()) * (11 - 1 + 1) + 1);

    }

    private primeraMano(): void {
        let opcion = require('readline-sync');
        let ingresar: number = 1;
        let as: number = 1;
        let asVariante: number = 11;
        ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n'));
        
    if (ingresar === 1) {
            //this.repartir();
            for (let i: number = 0; i < 2; i++) {
                this.carta.push(this.repartir());
                if (this.resultado < this.blackJack) {
                    this.resultado += this.carta[i];
                }
                console.log('Primera mano ' + this.carta[i]);
            }
            console.log('Total de la mano ' + this.resultado);
            let pedirCarta = Number(opcion.question('----Ingrese una opcion: ' + '\n' + '1- pedir otra carta---- ' + '\n' + '2- salir del juego----' + '\n'));     
            
            switch (pedirCarta) {
                case 1:
                   // this.repartir();
                    for (let i: number = 0; i < 1; i++) {
                            let nuevaCarta=this.repartir();
                            this.carta.push(nuevaCarta);
                            console.log('su carta es '+ nuevaCarta + '\n');
                            if( this.resultado <= this.blackJack){
                                this.resultado += nuevaCarta;
                                console.log("El resultado total es", this.resultado);                           
                            }
                            
                            else if (nuevaCarta === as) {
                                let opcion1 = Number(opcion.question('tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n'));
                                    switch (opcion1) {
                                        case 1:
                                        this.resultado -= as;
                                        console.log('Se resto 1 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                                        break;
                                        case 2:
                                        this.resultado += asVariante;
                                        console.log('Se sumo 11 del total de su mano' + '\n' + 'Resultado: ' + this.resultado)
                                        break;

                                }
                            }
                            
                            if (this.resultado === this.blackJack) {
                                console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
                            } else if (this.blackJack < this.resultado) {
                                console.log('Usted perdio, supero 21');
                                this.resultado = 0;
                            }

                        break;
                    }
                case 2:
                    console.log("salir");
                    
                    
                    break;
            }
        
        }
    }





    public jugar(): void {
        this.primeraMano();
    }

}

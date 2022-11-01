import { Casino } from "./Casino";
import * as RLS from "readline-sync";
export class BlackJack {
    protected carta: number[];
    protected resultado: number;
    protected apuestaInicial: number;
    constructor() {
        this.carta = [];
        this.resultado = 0;
        this.apuestaInicial = 3000; 
    }
        public obtenerApuestaInicial():number{
            return this.apuestaInicial;
        }
    private repartir(): number {
        return Math.floor(Math.random() * 11 - 1) + 1;
    }
    public jugar(): void {
        let opcion = require('readline-sync');
        let repartir: number = 0;
        let pedirOtraCarta: number = 0;
        let salir: number = 0;
        let blackJack: number = 21;
        let as: number = 1;
        let asVariante: number = 11;
        if (repartir === 1) {
            repartir = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n' + '0 para salir' + '\n'));
            for (let i: number = 0; i < 2; i++) {
                if (this.resultado < blackJack) {
                    this.repartir();
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
            pedirOtraCarta = Number(opcion.question('¿Desea pedir otra carta? Presione 2' + '\n' + 'Si desea salir oprima 0' + '\n'));
            if (pedirOtraCarta === 2) {
                for (let i: number = 0; i < 1; i++) {
                    if (blackJack < this.resultado) {
                        salir = Number(opcion.question('Uste perdió, desea seguir jugando? presione 1'+'\n'+this.resultado));
                    } else if (opcion === 1) {
                        this.resultado -= as;
                        console.log('Se ha restado 1 por su elecion de AS' + '\n' + this.resultado);
                    } else if (opcion === 2) {
                        this.resultado += asVariante;
                        console.log('Se ha sumado 11 por su elecion de AS' + '\n' + this.resultado);
                    } else if (this.resultado === as) {
                        opcion = Number(opcion.question('Ha sacado un AS ' + this.carta + '\n' + 'tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n'));
                    }
                    if (this.resultado === blackJack) {
                        console.log('FELICIDADES' + '\n' + 'TIENE UN BLACK JACK [21]', this.resultado)
                    }
                }
            }
        }

    }
}
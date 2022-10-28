import { Cliente } from "./Cliente";
import { TragaMonedas } from "./TragaMonedas";

export class Dados {
    private listadoDeCaras: Dados;
    private dado1: number;
    private dado2: number;
    private resultado: number;

    constructor(pDado1:number,pDado2:number) {
        this.dado1 = pDado1;
        this.dado2 = pDado2;
        this.resultado = 0;
    }

    public mostrarResultado(pDado1: number, pDado2: number): void {

    }
    public azar(pMin: number, pMax: number) {        // Math.floor(Math.ramdom()* ((max-min)+min))

        return Math.floor(Math.random() * pMax - pMin) + pMin;

    }
    

} 
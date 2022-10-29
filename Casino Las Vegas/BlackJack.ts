import { Casino } from "./Casino";
export class BlackJack{
    private carta: number;
    private mano:number;

    constructor(){
       this.carta = 1;
       this.mano = 21; 
    }

    public azar(pMin: number, pMax: number) {        // Math.floor(Math.ramdom()* ((max-min)+min))

        return Math.floor(Math.random() * pMax - pMin) + pMin;

    }

    public mostrar(){
         }
}

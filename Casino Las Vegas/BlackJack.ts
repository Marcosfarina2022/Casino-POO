import { Casino } from "./Casino";
export class BlackJack{

    private jugada:number;
    private carta: number;
    private mano:number;


    constructor(){
       this.carta = 1;
       this.mano = 21; 
    }


    /*public obtenerCredito():number{
    }*/
    public azar(pMin: number, pMax: number) {        // Math.floor(Math.ramdom()* ((max-min)+min))

        return Math.floor(Math.random() * pMax - pMin) + pMin;

    }

    public mostrar(){
         }

    public jugar(){
            console.log("Esta jugando");
         }
}

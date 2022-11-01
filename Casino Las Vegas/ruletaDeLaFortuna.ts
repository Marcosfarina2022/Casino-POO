import { Tragamonedas } from "./Tragamonedas";

export class RuletaDeLaFortuna extends Tragamonedas{

    constructor(){
        super();
        this.valorApuesta = 300;
        this.tematica = "Ruleta de la Fortuna";
        this.probabilidad = 3;

    }

}
import { Tragamonedas } from "./Tragamonedas";

export class RuletaDeLaFortuna extends Tragamonedas{
     
    public valorApuesta:number;
    protected tematica:string;
    protected probabilidad:number;
    protected valoresGanadores:number;
    protected valoresPosibles:number;
    protected columnas:number;
    public pozoAcumulado:number;
    public estadistica:string;
    protected partidasGanadas:number;
    protected partidasPerdidas:number;
    protected partidasJugadas: number;

    constructor(){
        super();
        this.valoresGanadores = 9;
        this.valoresPosibles = Math.pow(this.valoresGanadores, this.columnas);
        this.tematica = "Ruleta de la Fortuna";
        this.setProbabilidad();
        this.pozoAcumulado = 3000;
        this.setValorApuesta(300);
        this.partidasGanadas=0;
        this.partidasPerdidas=0;
        this.partidasJugadas=0;
        this.estadistica = "no Jugo";

        

    }

    

}
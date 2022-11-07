import { Tragamonedas } from "./Tragamonedas";
    

export class QuienQuiereSerMillonario extends Tragamonedas{
    
    public valorApuesta:number;
    protected tematica:string;
    protected probabilidad:number;
    protected valoresGanadores:number;
    protected valoresPosibles:number;
    protected columnas:number;
    public pozoAcumulado:number;
    
    constructor(){
        super()
        this.valoresGanadores = 5;
        this.valoresPosibles = Math.pow(this.valoresGanadores, this.columnas);
        this.tematica = "Quien Quiere ser millonario";
        this.setProbabilidad();
        this.pozoAcumulado = 1500;
        this.valorApuesta = 150;
        
        
        

    }

   

    



}
import { TragaMonedas } from "./TragaMonedas";
import { Cliente } from "./Cliente";
export class RuedaDeLaFortuna extends TragaMonedas{
    private creditoMinimo:number;
    private creditoMaximo:number;
    constructor(pCreditoDisponible:number,pJugador:Cliente,pFichasCompradas:number){
        super(pCreditoDisponible,pJugador,pFichasCompradas);
        this.creditoMinimo = 50;
        this.creditoMaximo = 10000;
    }
    public obtenerSaldoMinimo():number{
        return this.creditoMinimo;
    }
    public obtenerSaldoMaximo():number{
        return this.creditoMaximo;
    }
    public jugar(): void {
        console.log("Esta jugando");
    }
    public calcularGanancia(): void {
        console.log(this.calcularGanancia());
    }

}
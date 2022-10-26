import { Casino } from "./Casino";
import { Cliente } from "./Cliente";
export abstract class TragaMonedas extends Casino {

    private creditoDisponible: number;
    private jugador: Cliente;
    private pozoAcumulado: number;

    constructor(pCreditoDisponible: number, pJugador: Cliente, pFichasCompradas: number) {
        super(pFichasCompradas);
        this.creditoDisponible = pCreditoDisponible;
        this.jugador = pJugador;
        this.pozoAcumulado = 2000000;
    }
    public ingresarApuesta(pApuesta: number): void {
        if (this.creditoDisponible <= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        } else {
            console.log("Saldo insuficiente");
        }
    }
    public obtenerPozo():number{
        return this.pozoAcumulado;
    }
    public abstract jugar():void;
    public abstract calcularGanancia():void;
}
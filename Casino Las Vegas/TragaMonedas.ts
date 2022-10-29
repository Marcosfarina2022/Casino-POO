
export abstract class TragaMonedas{

    private creditoDisponible: number;
    private pozoAcumulado: number;

    constructor(pCreditoDisponible: number) {
        this.creditoDisponible = pCreditoDisponible;
        this.pozoAcumulado = 2000000;
    }
    /*public ingresarApuesta(pApuesta: number): void {
        if (this.creditoDisponible >= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        } else {
            console.log("Saldo insuficiente");
        }
    }*/

    public obtenerCreditoDisponible(): number{
        return this.creditoDisponible;
    }
 
    public obtenerPozo(): number {
        return this.pozoAcumulado;
    }
    public abstract jugar(): void;
    public abstract calcularGanancia(): void;
}
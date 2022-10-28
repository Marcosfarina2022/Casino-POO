export class Carta{
    private cartas:number;
    private pinta: string[];
    private valor: number[];
    creditoDisponible: any;
    jugador: string;
    constructor(){
        this.cartas = 52;
        this.pinta = ["As","2","3","4","5","6","7","8","10","J","Q","K"];
        this.valor = [1,2,3,4,5,6,7,8,9,10,10,10,10];
    }

    public ingresarApuesta(pApuesta:number){
        if (this.creditoDisponible >= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        } else {
            console.log("Saldo insuficiente");
        }
    }

    public obtenerCreditoDisponible(): number{
        return this.creditoDisponible;
    }

    public jugar(){

    }
}
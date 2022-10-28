import * as RLS from "readline-sync";
import { RuedaDeLaFortuna } from "./RuedaDeLaFortuna";
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { Dados } from "./Dados";
import { BlackJack } from "./BlackJack";
import { Ficha } from "./Ficha";
export class Casino {

    private nombreCasino: string;
    private direccion: string;
    private ficha:Ficha;
    private comprarCredito: number;

    constructor(pComprarFichas:Ficha) {
        this.nombreCasino = "Las Vegas Casino";
        this.comprarCredito = pComprarFichas.obtenerValor();
    }
    public ingresarDinero(pDineroIngresado:number):void{
        let saldoDisponible: number = 0;
        if (pDineroIngresado < saldoDisponible){
            this.comprarCredito = saldoDisponible;
        }
    }


    public obtenerCredito():number{
        return this.comprarCredito;
    }

    public obtenerNombre(): string {
        return this.nombreCasino;
    }
    public obtenerDireccion(): string {
        return this.direccion;
    }
    public elegirJuego(): void {
        let opcion: string = RLS.question();
        while (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {

            switch (opcion) {
                case "1":
                    RuedaDeLaFortuna;
                    break;
                case "2":
                    QuienQuiereSerMillonario;
                    break;
                case "3":
                    Dados;
                    break;
                    case "4":
                        BlackJack;
                        break;
                        case "5":
                        console.log("salir");
                        break;




            }
        }
    }

}




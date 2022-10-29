import * as RLS from "readline-sync";
import { RuedaDeLaFortuna } from "./RuedaDeLaFortuna";
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { Dados } from "./Dados";
import { BlackJack } from "./BlackJack";
export class Casino {

    private nombreCasino: string;
    private comprarCredito: number;
    private jugarCartas: BlackJack;
    private jugarDados: Dados;
    private jugarQuienQuiereSerMillonario: QuienQuiereSerMillonario;
    private ruedaDeLaFortuna: RuedaDeLaFortuna;

    constructor(pJugarCartas:BlackJack,pJugarRueda:RuedaDeLaFortuna,pJugarDados:Dados,pJugarMillonario:QuienQuiereSerMillonario) {
        this.nombreCasino = "Las Vegas Casino";
        this.jugarCartas = pJugarCartas;
        this.jugarDados = pJugarDados;
        this.jugarQuienQuiereSerMillonario = pJugarMillonario;
        this.ruedaDeLaFortuna = pJugarRueda;
    }
    public ingresarDinero(pDineroIngresado:number):void{
        console.log('Cuantas')
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
    public elegirJuego(pJugarCartas:BlackJack,pJugarDados:Dados,pJugarMillonario:QuienQuiereSerMillonario,pJugarRueda:RuedaDeLaFortuna): void {

        let opcion: string="0";
        while (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {

            switch (opcion) {
                case "1":
                   this.jugarCartas= BlackJack;
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




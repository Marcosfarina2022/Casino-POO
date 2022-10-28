import { TragaMonedas } from "./TragaMonedas";
import * as RLS from "readline-sync";
import { RuedaDeLaFortuna } from "./RuedaDeLaFortuna";
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { Dados } from "./Dados";
import { BlackJack } from "./BlackJack";

export class Casino {

    private nombre: string;
    private direccion: string;
    private comprarFichas: number;

    constructor(pComprarFichas: number) {
        this.nombre = "Las Vegas Casino";
        this.comprarFichas = pComprarFichas;
    }


    public obtenerNombre(): string {
        return this.nombre;
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




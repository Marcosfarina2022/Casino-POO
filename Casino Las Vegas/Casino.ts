import { TragaMonedas } from "./TragaMonedas";

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

    }
}

console.log("Hola mundo");


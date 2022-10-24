import { Casino } from "./Casino";
import { Juego } from "./Juego";
export class BlackJack extends Casino implements Juego {
    protected tipoDeJuego: string;
    constructor(pTipoDeJuego: string, pNombre: string, pCantidadFichas: number) {
        super(pNombre, pCantidadFichas);
        this.tipoDeJuego = pTipoDeJuego;
    }

    ingresarTipoDeJuego(pTipoDeJuego: string): void {

    }

    obtenerTipoDeJuego(): string {

    }

    jugar(pTipoDeJuego: string): void {

    }

    ingresarApuesta(paramFichas: number) {


    }

    calcularApuesta() {

    }

}
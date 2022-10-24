export interface Juego {
    ingresarTipoDeJuego(pTipoDeJuego:string): void;
    obtenerTipoDeJuego():string;
    jugar(pTipoDeJuego:string): void;
}

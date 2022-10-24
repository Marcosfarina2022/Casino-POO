import { Cliente } from "./Cliente";

export class ListaDeJugadores extends Cliente{
jugadores:Cliente[];
constructor(nombreJugador:string, paramFichas:number, paramListaJugadores:Cliente[]){
    super(nombreJugador,paramFichas)
    this.jugadores=paramListaJugadores;
}
public quitarJugador(Jugador:Cliente){

}
public registrarJugar(Jugador:Cliente){
    
}
}

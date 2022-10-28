import { Casino } from "./Casino";
export class Cliente {

    protected nombreJugador: string;
    protected dniJugador: number;
    constructor(paramNombreJugador: string, paramDni: number) {
        this.nombreJugador = paramNombreJugador;
        this.dniJugador = paramDni;
    }
    public getNombreJugador(): string {
        return this.nombreJugador;
    }
    public setNombreJugador(paramNombreJugador: string) {
        this.nombreJugador = paramNombreJugador;
    }
    public getDniJugador(): number {
        return this.dniJugador;
    }
    public setDniJugador(paramDni: number) {
        this.dniJugador = paramDni;
    }
} 
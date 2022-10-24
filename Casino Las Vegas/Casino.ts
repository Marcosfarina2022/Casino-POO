export abstract class Casino{

public nombreCasino:string;
public cantFichas:number;
constructor(paramNombreCasino:string, paramFichas:number){
    this.nombreCasino= paramNombreCasino;
    this.cantFichas=paramFichas;
}

abstract ingresarApuesta(paramFichas:number);
abstract calcularApuesta()

public getNombre():string{
    return this.nombreCasino;
}

}

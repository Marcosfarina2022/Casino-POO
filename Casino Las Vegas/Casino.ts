export abstract class Casino{

private nombre:string;
private cantFichas:number;
constructor(paramNombre:string, paramFichas:number){
    this.nombre= paramNombre;
    this.cantFichas=paramFichas;
}

abstract ingresarApuesta(paramFichas:number);
abstract calcularApuesta()

public getNombre():string{
    return this.nombre;
}

}

import { Casino } from "./Casino";
import * as RLS from "readline-sync";
var fs = require('fs')

export class Dados {
    protected dado: number;
    protected resultado1:number;
    protected resultado2:number;
    protected apuestaInicial:number;
    constructor(pDado1:number, apuestaI:number) {
        this.dado=pDado1;
        this.resultado1=0;
        this.resultado2=0;
        this.apuestaInicial=apuestaI;
    }

    private lanzarDados(): number{
        this.dado= Math.floor((Math.random())*(6 - 1 + 1) + 1);
        return this.dado;

    }
    private lanzarJugada():number{
        let resultado:number;
        resultado= this.lanzarDados()+this.lanzarDados();
        return resultado;
    }

    public jugarDados():void{
        let apuesta:number = parseInt(RLS.question("--------Ingrese su apuesta------- \n")); 
        if (apuesta>=10000) {
        let lanzar1:string = RLS.question("----Ingrese una opción: --- 1 - Lanzar---- ||--- 2 - Desistir lanzamiento----- \n");  
            switch (lanzar1) {
                case "1":
                this.resultado1= this.lanzarJugada();
                console.log("El resultado del primer lanzamiento fue de",this.resultado1);
                this.resultado2= this.lanzarJugada();
                console.log("El resultado del segundo lanzamiento fue de",this.resultado2);
                if (this.resultado1== this.resultado2) {
                    this.apuestaInicial= this.apuestaInicial*2; 
                    console.log("Felicitaciones!!!**** Ganó el premio Mayor ****** de $",this.apuestaInicial); 
                    
                } else {
                    console.log("******** Perdió el Juego ******");
                }
                break;    
                case "2":
                console.log("**** !!! Gracias por elegir jugar a los Dados!!!!!! *******");
                break;
             }
        }else{
            console.log("Su apuesta es insuficiente");
            let apuestaNueva:string = RLS.question("--------¿Desea ingresar otra apuesta?------- 1-Si || 2-No ---\n");
            switch (apuestaNueva) {
                case "1":
                    this.jugarDados();   
                    break;
            
                case "2":
                    console.log("Salió del juego");
                    break;
                    
            } 
            

        
            }           
          
        }
        public calcularProbabilidad(){
            
        }
      
}
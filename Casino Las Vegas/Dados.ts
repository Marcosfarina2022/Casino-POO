import { Casino } from "./Casino";
import * as RLS from "readline-sync";
var fs = require('fs')
let colores = require ('colors');

export class Dados {
    protected dado: number;
    protected resultado1:number;
    protected resultado2:number;
    protected apuestaInicial:number;
    protected espacioMuestral:number[];
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
        let apuesta:number = parseInt(RLS.question(colores.brightGreen.italic("--------Ingrese su apuesta------- \n"))); 
        if (apuesta>=10000) {
        let lanzar1:string = RLS.question(colores.brightGreen.italic('----Ingrese una opcion'+'\n' +'Lanzar ===> '+ colores.brightYellow('1')+'\n'+'Desistir lanzamiento ===>'+ colores.brightYellow('2') +'\n'));  
            switch (lanzar1) {
                case "1":
                this.resultado1= this.lanzarJugada();
                console.log(colores.brightGreen.italic("El resultado del primer lanzamiento fue de"),colores.brightYellow.bold(this.resultado1));
                this.resultado2= this.lanzarJugada();
                console.log(colores.brightGreen.italic("El resultado del segundo lanzamiento fue de"),colores.brightYellow.bold(this.resultado2));
                if (this.resultado1== this.resultado2) {
                    this.apuestaInicial= this.apuestaInicial*2; 
                    console.log(colores.brightYellow.italic.bold("Felicitaciones!!!**** Ganó el premio Mayor ****** de $"),colores.brightGreen.italic.bold(this.apuestaInicial)); 
                    
                } else {
                    console.log(colores.red.italic.bold("******** Perdió el Juego ******"));
                }
                break;    
                case "2":
                console.log(colores.black.bold.italic("**** !!! Gracias por elegir jugar a los Dados!!!!!! *******"));
                break;
             }
        }else{
            console.log(colores.red.italic.bold("Su apuesta es insuficiente"));
            let apuestaNueva:string = RLS.question(colores.brightBlue.italic("-------- Desea ingresar otra apuesta?")+colores.green.italic("SI")+ colores.brightYellow.italic.bold("1")+"\n"+("NO")+ colores.brightYellow.italic.bold("1")+"\n");
            switch (apuestaNueva) {
                case "1":
                    this.jugarDados();   
                    break;
            
                case "2":
                    console.log(colores.blue.italic.bold("Salió del juego"));
                    break;
                    
            } 
            

        
            }           
          
        }
      
}
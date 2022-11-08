
import * as RLS from "readline-sync";
var fs = require('fs')
let colores = require ('colors');

export class Dados {
    protected dado: number;
    protected resultado1:number;
    protected resultado2:number;
    protected apuestaInicial:number;
    public estadistica:string;
    protected partidasGanadas:number;
    protected partidasPerdidas:number;
    protected partidasJugadas: number;



    constructor(pDado1:number, apuestaI:number) {
        this.dado=pDado1;
        this.resultado1=0;
        this.resultado2=0;
        this.apuestaInicial=apuestaI;
        this.partidasGanadas=0;
        this.partidasPerdidas=0;
        this.partidasJugadas=0;
        this.estadistica = " no Jugo";
    }



    public getApuestaI():number{
        return this.apuestaInicial
    }

    public sumarEstadistica():void{
        this.estadistica = "\n jugo: "+this.partidasJugadas+"\n Gano: "+this.partidasGanadas+"\n Perdio: "+this.partidasPerdidas;
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
            this.partidasJugadas += 1;
        let lanzar1:string = RLS.question(colores.brightGreen.italic('----Ingrese una opcion')+'\n' +colores.brightGreen.italic('Lanzar ===> ')+ colores.brightYellow('1')+'\n'+colores.brightGreen.italic('Desistir lanzamiento ===> ')+ colores.brightYellow('2') +'\n');  
            switch (lanzar1) {
                case "1":
                this.resultado1= this.lanzarJugada();
                console.log(colores.brightGreen.italic("El resultado del primer lanzamiento fue de "),colores.brightYellow.bold(this.resultado1));
                this.resultado2= this.lanzarJugada();
                console.log(colores.brightGreen.italic("El resultado del segundo lanzamiento fue de "),colores.brightYellow.bold(this.resultado2));
                if (this.resultado1== this.resultado2) {
                    this.apuestaInicial= this.apuestaInicial*2; 
                    console.log(colores.brightGreen.italic.bold("Felicitaciones!!!**** Ganó el premio Mayor ****** de $")+colores.brightYellow.italic.bold(this.apuestaInicial)); 
                    this.partidasGanadas +=1;
                } else {
                    
                    console.log(colores.red.italic.bold("******** Perdió el Juego ******"));
                    this.partidasPerdidas +=1;
                }
                break;    
                case "2":
                console.log(colores.black.bold.italic("**** !!! Gracias por elegir jugar a los Dados!!!!!! *******"));
                break;
             }
        }else{
            console.log(colores.red.italic.bold("Su apuesta es insuficiente"));
            let apuestaNueva:string = RLS.question(colores.brightBlue.italic("-------- Desea ingresar otra apuesta?")+'\n'+colores.green.italic("SI ===> ")+ colores.brightYellow.italic.bold("1")+"\n"+colores.green.italic("NO ===> " )+ colores.brightYellow.italic.bold("2")+"\n");
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
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { RuletaDeLaFortuna } from "./RuletaDeLaFortuna";
import { BlackJack } from "./BlackJack";
import { Dados } from "./Dados";
import * as RLS from "readline-sync";
var fs = require('fs');
var colors = require('colors/safe');
var colores = require('colors');
export class Casino{
    private tragamonedas1:QuienQuiereSerMillonario;
    private tragamonedas2:RuletaDeLaFortuna;
    private blackJack:BlackJack;
    private dados:Dados;
    public estadisticasGenerales:string;

    

    constructor(){
        this.tragamonedas1 = new QuienQuiereSerMillonario();
        this.tragamonedas2 = new RuletaDeLaFortuna();
        this.blackJack = new BlackJack();
        this.dados = new Dados(1, 500000);
        this.estadisticasGenerales = "";

      
    }

    public setEstadisticasGenerales():void{

        this.estadisticasGenerales =  "Quien quiere ser millonario \n"+this.tragamonedas1.estadistica+ "\n" +"Ruleta de la fortuna \n"+ this.tragamonedas2.estadistica+ "\n"+"\nBlackJack \n"+ this.blackJack.estadistica +"\n"+"\nDados \n"+ this.dados.estadistica;
    }

    public getEstadisticasGenerales():string{
        return this.estadisticasGenerales;
    }

    public manipular(nombre:string,texto:string):void{
        fs.writeFile(nombre,texto, error =>{
            if (error){
                console.log(colores.red.bold('ERROR'));
            }
        });
    }
    public modificarArchivo(nombre:string, texto:string):void{
        this.manipular(nombre,texto);
    }
    public leerArchivo(path:string):string{
        let txtFile:string = fs.readFileSync(path,'utf-8');
        return txtFile;
    }
   public ingresar(){

     this.modificarArchivo("EstadisticasCasino.txt","");
     let readlineSync = require('readline-sync');
        let ingresar:number = 2;
        let opcion:number = 1;
        
        while (ingresar==2){
            console.log(colors.magenta(' **** Elija el juego que quiere jugar **** '+'\n'+'\n'));

            opcion = parseInt(readlineSync.question(colores.yellow('1- Quien Quiere Ser Millonario'+'\n'+'2- Ruleta de la fortuna'+'\n'+'3- Black Jack'+'\n'+'4- Dados'+'\n')));
            let otraVez:number = 1;
            switch (opcion) {
                case 1:
                    console.log(colores.brightBlue.bold.italic("su probabilidad de Ganar es: %")+colores.yellow.bold(this.tragamonedas1.getProbabilidad())+colores.brightGreen.bold.italic(" por Tiro"));
                    while(otraVez==1){
                        console.log(this.tragamonedas1.jugar());
                        otraVez = parseInt(readlineSync.question(colores.brightBlue.italic(" Desea jugar Otra Vez? ")+ '\n'+colores.brightMagenta.bold.italic("SI ===> ")+ colores.yellow.italic.bold("1")+'\n'+colores.brightMagenta.bold.italic("NO ===> ") +colores.yellow.italic.bold("2") +"\n"));
                    }
                    this.tragamonedas1.sumarEstadistica();
                    break;
                
                case 2:
                    
                    console.log(colores.brightBlue.bold.italic("su probabilidad de Ganar es: %")+colores.yellow.bold(this.tragamonedas2.getProbabilidad())+colores.brightGreen.bold.italic(" por Tiro"));
                    while(otraVez==1){
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question(colores.brightBlue.italic(" Desea jugar Otra Vez? ")+ '\n'+colores.brightMagenta.bold.italic("SI ===> ")+ colores.yellow.italic.bold("1")+'\n'+colores.brightMagenta.bold.italic("NO ===> ") +colores.yellow.italic.bold("2") +"\n"));
                        }
                        this.tragamonedas2.sumarEstadistica();
                    
                    break;

                 case 3:

                    while(otraVez==1){
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question(colores.brightBlue.italic(" Desea jugar Otra Vez? ")+ '\n'+colores.brightMagenta.bold.italic("SI ===> ")+ colores.yellow.italic.bold("1")+'\n'+colores.brightMagenta.bold.italic("NO ===> ") +colores.yellow.italic.bold("2") +"\n"));
                        }
                        this.blackJack.sumarEstadistica();
                    

                    break;

                 case 4:

                    while(otraVez==1){
                        
                        this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question(colores.brightMagenta.italic(" Desea jugar Otra Vez? ")+ '\n'+colores.brightMagenta.bold.italic("SI ===> ")+ colores.yellow.italic.bold("1")+'\n'+colores.brightMagenta.bold.italic("NO ===> ") +colores.yellow.italic.bold("2") +"\n"));
                        }
                        this.dados.sumarEstadistica();
                    

                    break;

                default:
                    break;
            }
            




            ingresar = readlineSync.question(colores.brightBlue.italic("Desea salir del casino? ")+'\n'+colores.brightMagenta.bold.italic("SI ===> ")+ colores.yellow.italic.bold("1")+'\n'+colores.brightMagenta.bold.italic("NO ===> ") +colores.yellow.italic.bold("2") +"\n");
        }
        this.setEstadisticasGenerales();
        this.modificarArchivo("EstadisticasCasino.txt",this.getEstadisticasGenerales());
    }



}
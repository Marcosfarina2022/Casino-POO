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

    

    constructor(){
        this.tragamonedas1 = new QuienQuiereSerMillonario();
        this.tragamonedas2 = new RuletaDeLaFortuna();
        this.blackJack = new BlackJack();
        this.dados = new Dados(1, 500000);
      
    }
    public manipular(nombre:string,texto:string):void{
        fs.writeFile(nombre,texto, error =>{
            if (error){
                console.log(colores.red.bold('ERROR'));
            }else{
                console.log(colores.green.bold('SE CREO EL ARCHIVO'));
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

    let readlineSync = require('readline-sync');
        let ingresar:number = 1;
        let opcion:number = 1;
        
        while (ingresar==1){
            console.log(colors.magenta(' **** Elija el juego que quiere jugar **** '+'\n'+'\n'));

            opcion = parseInt(readlineSync.question(colores.yellow('1- QuienQuiereSerMillonario'+'\n'+'2- Rueda de la fortuna'+'\n'+'3- Black Jack'+'\n'+'4- Dados'+'\n')));
            let otraVez:number = 1;
            switch (opcion) {
                case 1:
                    console.log(colores.brightGreen.bold.italic("su probabilidad de Ganar es: %"+colores.yellow.bold(this.tragamonedas1.getProbabilidad())+" por Tiro"));
                    while(otraVez==1){
                    console.log(this.tragamonedas1.jugar());
                    otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?"+ "SI ===> "+ colores.yellow.italic.bold("1"+'\n'+"NO ===> " +"2") +"\n")));
                    }
                    break;
                
                case 2:
                    
                    console.log(colores.brightGreen.bold.italic("su probabilidad de Ganar es: %"+colores.yellow.bold(this.tragamonedas2.getProbabilidad())+" por Tiro"));
                    while(otraVez==1){
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?"+ "SI ===> "+ colores.yellow.italic.bold("1"+'\n'+"NO ===> " +"2") +"\n")));
                        }
                    

                    break;

                 case 3:

                    while(otraVez==1){
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?"+ '\n'+"SI ===> "+ colores.yellow.italic.bold("1"+'\n'+"NO ===> ") +"2") +"\n"));
                        }
                    

                    break;

                 case 4:

                    while(otraVez==1){
                        
                        this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez?"+ '\n'+"SI ===> "+ colores.yellow.italic.bold("1"+'\n'+"NO ===> ") +"2") +"\n");
                        }
                    

                    break;

                default:
                    break;
            }
            




            ingresar = readlineSync.question(colores.brightRed.bold.italic("Desea salir del casino?"+'\n'+ "SI ===> "+ colores.yellow.italic.bold("1"+'\n'+"NO ===> " +"2") +"\n"));
        }
    }



}
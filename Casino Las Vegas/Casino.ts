import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { RuletaDeLaFortuna } from "./ruletaDeLaFortuna";
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
                console.log('ERROR');
            }else{
                console.log('SE CREO EL ARCHIVO');
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
                    
                    while(otraVez==1){
                    console.log(this.tragamonedas1.jugar());
                    otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                
                case 2:

                    while(otraVez==1){
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question("¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                 case 3:

                    while(otraVez==1){
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question("¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                 case 4:

                    while(otraVez==1){
                        
                        this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                default:
                    break;
            }
            




            ingresar = readlineSync.question("¿Desea salir del casino? 1-NO || 2-SI \n");
        }
    }



}
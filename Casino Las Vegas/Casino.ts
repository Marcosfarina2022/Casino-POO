import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { RuletaDeLaFortuna } from "./ruletaDeLaFortuna";
import { BlackJack } from "./BlackJack";
import { Dados } from "./Dados";
import * as RLS from "readline-sync";

var fs = require('fs');

export class Casino{
    private tragamonedas1:QuienQuiereSerMillonario;
    private tragamonedas2:RuletaDeLaFortuna;
    private blackJack:BlackJack;
    private dados:Dados;

    

    constructor(){
        this.tragamonedas1 = new QuienQuiereSerMillonario();
        this.tragamonedas2 = new RuletaDeLaFortuna();
        this.blackJack = new BlackJack();
        this.dados = new Dados(1);
       
        


        
    }


    public texto():void{
        
        this.crearArchivo("Casino.txt","UTF-8");
        this.leerArchivo("casinoPrueba.txt");
    }

    public crearArchivo(nombre:string,texto:string){
        fs.writeFile(nombre,texto,error =>{
        
            if (error)
                console.log("ERROR");
             else
                console.log("El archivo fue creado");
                
            })
    }
    public leerArchivo(path:string):void{
        fs.readFile( path, (error,texto) =>{
            if (error)
                console.log("ERROR");
             else
                console.log(texto.toString());
                
            })
    }


    ingresar(){

        this.texto();
        let readlineSync = require('readline-sync');
        let ingresar:number = 1;
        let opcion:number = 1;
        
        while (ingresar==1){
            opcion = parseInt(readlineSync.question("elija el juego que quiere jugar \n 1-QuienQuiereSerMillonario || 2- rueda de la fortuna || 3- Black Jack || 4-Dados \n"));
            let otraVez:number = 1;
            switch (opcion) {
                case 1:
                    
                    while(otraVez==1){
                    console.log(this.tragamonedas1.jugar());
                    otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                
                case 2:

                    while(otraVez==1){
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                 case 3:

                    while(otraVez==1){
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                 case 4:

                    while(otraVez==1){
                        let textoDados:string="Bienvenido, usted eligió el juego de Dados"
                            this.dados.crearArchivo("dados.txt",textoDados);
                            this.dados.leerArchivo("dados.txt");
                            this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                        }
                    

                    break;

                default:
                    break;
            }
            




            ingresar = readlineSync.question("Desea salir del casino? 1-NO || 2-SI \n");
        }
    }



}
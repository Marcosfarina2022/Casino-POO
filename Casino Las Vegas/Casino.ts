import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";
import { RuletaDeLaFortuna } from "./ruletaDeLaFortuna";
import { BlackJack } from "./BlackJack";
import { Dados } from "./Dados";

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

    ingresar(){
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
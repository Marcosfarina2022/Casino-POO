
import { RuedaDeLaFortuna } from "./RuedaDeLaFortuna";
import { Dados } from "./Dados";
import { BlackJack } from "./BlackJack";
import { readlinkSync } from "fs";
import * as RLS from "readline-sync";
import { cachedDataVersionTag } from "v8";
import { Casino } from "./Casino";
import { QuienQuiereSerMillonario } from "./QuienQuiereSerMillonario";

let cartas:BlackJack= new BlackJack();
let dados:Dados= new Dados(1, 2);
let maq1:QuienQuiereSerMillonario= new QuienQuiereSerMillonario(300,50);
let maq2:RuedaDeLaFortuna= new RuedaDeLaFortuna(1000);
let juegos:Casino= new Casino(maq2,dados,maq1);
juegos.elegirJuego();
//console.log(juegos);


/*let opcion: string = RLS.question();
        while (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {

            switch (opcion) {
                case "1":
                 casino.
                    break;
                case "2":
                pJugarDados;
                    break;
                case "3":
                pJugarMillonario;
                    break;
                case "4":
                pJugarRueda;
                    break;
                case "5":
                    console.log("salir");
                    break;

            }
        }*/










 
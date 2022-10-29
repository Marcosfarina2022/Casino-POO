"use strict";
exports.__esModule = true;
var RuedaDeLaFortuna_1 = require("./RuedaDeLaFortuna");
var Dados_1 = require("./Dados");
var BlackJack_1 = require("./BlackJack");
var Casino_1 = require("./Casino");
var QuienQuiereSerMillonario_1 = require("./QuienQuiereSerMillonario");
var cartas = new BlackJack_1.BlackJack();
var dados = new Dados_1.Dados(1, 2);
var maq1 = new QuienQuiereSerMillonario_1.QuienQuiereSerMillonario(300, 50);
var maq2 = new RuedaDeLaFortuna_1.RuedaDeLaFortuna(1000);
var juegos = new Casino_1.Casino(cartas, maq2, dados, maq1);
juegos.obtenerNombre();
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

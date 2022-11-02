"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var QuienQuiereSerMillonario_1 = require("./QuienQuiereSerMillonario");
var ruletaDeLaFortuna_1 = require("./ruletaDeLaFortuna");
var BlackJack_1 = require("./BlackJack");
var Dados_1 = require("./Dados");
var fs = require('fs');
var Casino = /** @class */ (function () {
    function Casino() {
        this.tragamonedas1 = new QuienQuiereSerMillonario_1.QuienQuiereSerMillonario();
        this.tragamonedas2 = new ruletaDeLaFortuna_1.RuletaDeLaFortuna();
        this.blackJack = new BlackJack_1.BlackJack();
        this.dados = new Dados_1.Dados(1);
    }
    Casino.prototype.ingresar = function () {
        var readlineSync = require('readline-sync');
        var ingresar = 1;
        var opcion = 1;
        while (ingresar == 1) {
            opcion = parseInt(readlineSync.question("elija el juego que quiere jugar \n 1-QuienQuiereSerMillonario || 2- rueda de la fortuna || 3- Black Jack || 4-Dados \n"));
            var otraVez = 1;
            switch (opcion) {
                case 1:
                    while (otraVez == 1) {
                        console.log(this.tragamonedas1.jugar());
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 2:
                    while (otraVez == 1) {
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 3:
                    while (otraVez == 1) {
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question("Jugar Otra Vez? 1-SI || 2-NO \n"));
                    }
                    break;
                case 4:
                    while (otraVez == 1) {
                        var textoDados = "Bienvenido, usted eligió el juego de Dados";
                        this.dados.crearArchivo("dados.txt", textoDados);
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
    };
    return Casino;
}());
exports.Casino = Casino;

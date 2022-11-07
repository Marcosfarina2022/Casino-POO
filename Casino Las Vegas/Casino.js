"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var QuienQuiereSerMillonario_1 = require("./QuienQuiereSerMillonario");
var RuletaDeLaFortuna_1 = require("./RuletaDeLaFortuna");
var BlackJack_1 = require("./BlackJack");
var Dados_1 = require("./Dados");
var fs = require('fs');
var colors = require('colors/safe');
var colores = require('colors');
var Casino = /** @class */ (function () {
    function Casino() {
        this.tragamonedas1 = new QuienQuiereSerMillonario_1.QuienQuiereSerMillonario();
        this.tragamonedas2 = new RuletaDeLaFortuna_1.RuletaDeLaFortuna();
        this.blackJack = new BlackJack_1.BlackJack();
        this.dados = new Dados_1.Dados(1, 500000);
    }
    Casino.prototype.manipular = function (nombre, texto) {
        fs.writeFile(nombre, texto, function (error) {
            if (error) {
                console.log(colores.red.bold('ERROR'));
            }
            else {
                console.log(colores.green.bold('SE CREO EL ARCHIVO'));
            }
        });
    };
    Casino.prototype.modificarArchivo = function (nombre, texto) {
        this.manipular(nombre, texto);
    };
    Casino.prototype.leerArchivo = function (path) {
        var txtFile = fs.readFileSync(path, 'utf-8');
        return txtFile;
    };
    Casino.prototype.ingresar = function () {
        var readlineSync = require('readline-sync');
        var ingresar = 1;
        var opcion = 1;
        while (ingresar == 1) {
            console.log(colors.magenta(' **** Elija el juego que quiere jugar **** ' + '\n' + '\n'));
            opcion = parseInt(readlineSync.question(colores.yellow('1- QuienQuiereSerMillonario' + '\n' + '2- Rueda de la fortuna' + '\n' + '3- Black Jack' + '\n' + '4- Dados' + '\n')));
            var otraVez = 1;
            switch (opcion) {
                case 1:
                    console.log(colores.brightGreen.bold.italic("su probabilidad de Ganar es: %" + colores.yellow.bold(this.tragamonedas1.getProbabilidad()) + " por Tiro"));
                    while (otraVez == 1) {
                        console.log(this.tragamonedas1.jugar());
                        otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?" + "SI ===> " + colores.yellow.italic.bold("1" + '\n' + "NO ===> " + "2") + "\n")));
                    }
                    break;
                case 2:
                    console.log(colores.brightGreen.bold.italic("su probabilidad de Ganar es: %" + colores.yellow.bold(this.tragamonedas2.getProbabilidad()) + " por Tiro"));
                    while (otraVez == 1) {
                        console.log(this.tragamonedas2.jugar());
                        otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?" + "SI ===> " + colores.yellow.italic.bold("1" + '\n' + "NO ===> " + "2") + "\n")));
                    }
                    break;
                case 3:
                    while (otraVez == 1) {
                        this.blackJack.jugar();
                        otraVez = parseInt(readlineSync.question(colores.brightGreen.italic(" ¿Desea jugar Otra Vez?" + '\n' + "SI ===> " + colores.yellow.italic.bold("1" + '\n' + "NO ===> ") + "2") + "\n"));
                    }
                    break;
                case 4:
                    while (otraVez == 1) {
                        this.dados.jugarDados();
                        otraVez = parseInt(readlineSync.question(" ¿Desea jugar Otra Vez?" + '\n' + "SI ===> " + colores.yellow.italic.bold("1" + '\n' + "NO ===> ") + "2") + "\n");
                    }
                    break;
                default:
                    break;
            }
            ingresar = readlineSync.question(colores.brightRed.bold.italic("Desea salir del casino?" + '\n' + "SI ===> " + colores.yellow.italic.bold("1" + '\n' + "NO ===> " + "2") + "\n"));
        }
    };
    return Casino;
}());
exports.Casino = Casino;

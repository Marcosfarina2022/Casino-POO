"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var RLS = require("readline-sync");
var RuedaDeLaFortuna_1 = require("./RuedaDeLaFortuna");
var QuienQuiereSerMillonario_1 = require("./QuienQuiereSerMillonario");
var Dados_1 = require("./Dados");
var BlackJack_1 = require("./BlackJack");
var Casino = /** @class */ (function () {
    function Casino(pComprarFichas) {
        this.nombre = "Las Vegas Casino";
        this.comprarFichas = pComprarFichas;
    }
    Casino.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Casino.prototype.obtenerDireccion = function () {
        return this.direccion;
    };
    Casino.prototype.elegirJuego = function () {
        var opcion = RLS.question();
        while (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {
            switch (opcion) {
                case "1":
                    RuedaDeLaFortuna_1.RuedaDeLaFortuna;
                    break;
                case "2":
                    QuienQuiereSerMillonario_1.QuienQuiereSerMillonario;
                    break;
                case "3":
                    Dados_1.Dados;
                    break;
                case "4":
                    BlackJack_1.BlackJack;
                    break;
                case "5":
                    console.log("salir");
                    break;
            }
        }
    };
    return Casino;
}());
exports.Casino = Casino;

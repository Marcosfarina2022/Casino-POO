"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas() {
    }
    Tragamonedas.prototype.getValorApuesta = function () {
        return this.valorApuesta;
    };
    Tragamonedas.prototype.getTematica = function () {
        return this.tematica;
    };
    Tragamonedas.prototype.dado = function () {
        var dado = Math.random() * ((this.probabilidad + 1) - 1) + 1;
        return Math.floor(dado);
    };
    Tragamonedas.prototype.pantalla = function () {
        var pantalla = new Array();
        for (var index = 0; index < 3; index++) {
            pantalla.push(this.dado());
        }
        return pantalla;
    };
    Tragamonedas.prototype.gano = function (pantalla) {
        if ((pantalla[0] == pantalla[1] && pantalla[1] == pantalla[2])) {
            return true;
        }
        else {
            return false;
        }
    };
    Tragamonedas.prototype.jugar = function () {
        var pantalla = this.pantalla();
        if (this.gano(pantalla)) {
            return "\n ================= \n" +
                " || " + pantalla[0] + " || " + pantalla[1] + " || " + pantalla[2] + " || " + "\n" +
                " ================= \n" +
                "Gano $" + (this.valorApuesta * 2);
        }
        else {
            return "\n ================= \n" +
                " || " + pantalla[0] + " || " + pantalla[1] + " || " + pantalla[2] + " || " + "\n" +
                " ================= \n" +
                "Perdio";
        }
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;

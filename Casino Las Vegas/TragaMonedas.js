"use strict";
exports.__esModule = true;
exports.Tragamonedas = void 0;
var readlineSync = require('readline-sync');
var Tragamonedas = /** @class */ (function () {
    function Tragamonedas() {
        this.columnas = 3;
    }
    Tragamonedas.prototype.setProbabilidad = function () {
        this.probabilidad = (this.valoresGanadores / this.valoresPosibles) * 100;
    };
    Tragamonedas.prototype.getValoresPosibles = function () {
        return this.valoresPosibles;
    };
    Tragamonedas.prototype.setValorApuesta = function (valor) {
        this.valorApuesta = valor;
    };
    Tragamonedas.prototype.getValorApuesta = function () {
        return this.valorApuesta;
    };
    Tragamonedas.prototype.getTematica = function () {
        return this.tematica;
    };
    Tragamonedas.prototype.dado = function () {
        var dado = Math.random() * ((this.valoresGanadores + 1) - 1) + 1;
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
    Tragamonedas.prototype.getProbabilidad = function () {
        return this.probabilidad;
    };
    Tragamonedas.prototype.aumentarPozoAcumulado = function () {
        this.pozoAcumulado = this.pozoAcumulado + this.getValorApuesta();
    };
    Tragamonedas.prototype.reiniciarPozoAcumulado = function () {
        this.pozoAcumulado = this.getValorApuesta() * 10;
    };
    Tragamonedas.prototype.jugar = function () {
        console.log("\n\n");
        console.log("Apuesta $" + this.getValorApuesta());
        console.log("POZO ACUMULADO $" + this.pozoAcumulado);
        var pantalla = this.pantalla();
        if (this.gano(pantalla)) {
            var gano = this.pozoAcumulado;
            this.reiniciarPozoAcumulado();
            return "\n ================= \n" +
                " || " + pantalla[0] + " || " + pantalla[1] + " || " + pantalla[2] + " || " + "\n" +
                " ================= \n" +
                "Gano $" + (gano) + "\n\n" +
                "Ahora el Pozo se reinicio y es de $" + (this.pozoAcumulado) + "\n\n";
        }
        else {
            this.aumentarPozoAcumulado();
            return "\n ================= \n" +
                " || " + pantalla[0] + " || " + pantalla[1] + " || " + pantalla[2] + " || " + "\n" +
                " ================= \n" +
                "Perdio\n" +
                "Ahora el Pozo Acumulado es de $" + (this.pozoAcumulado) + "\n\n";
        }
    };
    return Tragamonedas;
}());
exports.Tragamonedas = Tragamonedas;

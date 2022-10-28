"use strict";
exports.__esModule = true;
exports.Carta = void 0;
var Carta = /** @class */ (function () {
    function Carta() {
        this.cartas = 52;
        this.pinta = ["As", "2", "3", "4", "5", "6", "7", "8", "10", "J", "Q", "K"];
        this.valor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    }
    Carta.prototype.ingresarApuesta = function (pApuesta) {
        if (this.creditoDisponible >= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    Carta.prototype.obtenerCreditoDisponible = function () {
        return this.creditoDisponible;
    };
    Carta.prototype.jugar = function () {
    };
    return Carta;
}());
exports.Carta = Carta;

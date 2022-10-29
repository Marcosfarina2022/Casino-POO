"use strict";
exports.__esModule = true;
exports.TragaMonedas = void 0;
var TragaMonedas = /** @class */ (function () {
    function TragaMonedas(pCreditoDisponible) {
        this.creditoDisponible = pCreditoDisponible;
        this.pozoAcumulado = 2000000;
    }
    /*public ingresarApuesta(pApuesta: number): void {
        if (this.creditoDisponible >= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        } else {
            console.log("Saldo insuficiente");
        }
    }*/
    TragaMonedas.prototype.obtenerCreditoDisponible = function () {
        return this.creditoDisponible;
    };
    TragaMonedas.prototype.obtenerPozo = function () {
        return this.pozoAcumulado;
    };
    return TragaMonedas;
}());
exports.TragaMonedas = TragaMonedas;

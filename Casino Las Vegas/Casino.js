"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pJugarCartas, pJugarRueda, pJugarDados, pJugarMillonario) {
        this.nombreCasino = "Las Vegas Casino";
        this.jugarCartas = pJugarCartas;
        this.jugarDados = pJugarDados;
        this.jugarQuienQuiereSerMillonario = pJugarMillonario;
        this.ruedaDeLaFortuna = pJugarRueda;
    }
    Casino.prototype.ingresarDinero = function (pDineroIngresado) {
        console.log('Cuantas');
        var saldoDisponible = 0;
        if (pDineroIngresado < saldoDisponible) {
            this.comprarCredito = saldoDisponible;
        }
    };
    Casino.prototype.obtenerCredito = function () {
        return this.comprarCredito;
    };
    Casino.prototype.obtenerNombre = function () {
        return this.nombreCasino;
    };
    Casino.prototype.elegirJuego = function (pJugarCartas, pJugarDados, pJugarMillonario, pJugarRueda) {
        var opcion = "";
        while (opcion == "1" || opcion == "2" || opcion == "3" || opcion == "4" || opcion == "5") {
            switch (opcion) {
                case "1":
                    console.log("El juego elegido es Blackjack");
                    //pJugarCartas;
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
        }
    };
    return Casino;
}());
exports.Casino = Casino;

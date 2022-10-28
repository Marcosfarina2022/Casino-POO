"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.TragaMonedas = void 0;
var Casino_1 = require("./Casino");
var TragaMonedas = /** @class */ (function (_super) {
    __extends(TragaMonedas, _super);
    function TragaMonedas(pCreditoDisponible, pJugador, pFichasCompradas) {
        var _this = _super.call(this, pFichasCompradas) || this;
        _this.creditoDisponible = pCreditoDisponible;
        _this.jugador = pJugador;
        _this.pozoAcumulado = 2000000;
        return _this;
    }
    TragaMonedas.prototype.ingresarApuesta = function (pApuesta) {
        if (this.creditoDisponible >= pApuesta) {
            console.log(this.jugador + " Su apuesta ha sido ingresada su credito es " + this.creditoDisponible);
        }
        else {
            console.log("Saldo insuficiente");
        }
    };
    TragaMonedas.prototype.obtenerCreditoDisponible = function () {
        return this.creditoDisponible;
    };
    TragaMonedas.prototype.obtenerPozo = function () {
        return this.pozoAcumulado;
    };
    return TragaMonedas;
}(Casino_1.Casino));
exports.TragaMonedas = TragaMonedas;

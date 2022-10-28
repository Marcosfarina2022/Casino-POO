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
exports.RuedaDeLaFortuna = void 0;
var TragaMonedas_1 = require("./TragaMonedas");
var RuedaDeLaFortuna = /** @class */ (function (_super) {
    __extends(RuedaDeLaFortuna, _super);
    function RuedaDeLaFortuna(pCreditoDisponible, pJugador, pFichasCompradas) {
        var _this = _super.call(this, pCreditoDisponible, pJugador, pFichasCompradas) || this;
        _this.creditoMinimo = 50;
        _this.creditoMaximo = 10000;
        return _this;
    }
    RuedaDeLaFortuna.prototype.obtenerSaldoMinimo = function () {
        return this.creditoMinimo;
    };
    RuedaDeLaFortuna.prototype.obtenerSaldoMaximo = function () {
        return this.creditoMaximo;
    };
    RuedaDeLaFortuna.prototype.jugar = function () {
        console.log("Esta jugando");
    };
    RuedaDeLaFortuna.prototype.calcularGanancia = function () {
        console.log(this.calcularGanancia());
    };
    return RuedaDeLaFortuna;
}(TragaMonedas_1.TragaMonedas));
exports.RuedaDeLaFortuna = RuedaDeLaFortuna;

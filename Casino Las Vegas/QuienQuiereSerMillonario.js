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
exports.QuienQuiereSerMillonario = void 0;
var TragaMonedas_1 = require("./TragaMonedas");
var QuienQuiereSerMillonario = /** @class */ (function (_super) {
    __extends(QuienQuiereSerMillonario, _super);
    function QuienQuiereSerMillonario(pDoblarApuesta, pCreditoDisponible) {
        var _this = _super.call(this, pCreditoDisponible) || this;
        _this.creditoMinimo = 2000;
        _this.doblarApuesta = pDoblarApuesta;
        return _this;
    }
    QuienQuiereSerMillonario.prototype.jugar = function () {
        console.log("Esta jugando");
    };
    QuienQuiereSerMillonario.prototype.calcularGanancia = function () {
        console.log(this.calcularGanancia());
    };
    return QuienQuiereSerMillonario;
}(TragaMonedas_1.TragaMonedas));
exports.QuienQuiereSerMillonario = QuienQuiereSerMillonario;

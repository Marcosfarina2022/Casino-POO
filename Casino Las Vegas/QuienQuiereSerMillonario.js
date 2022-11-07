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
var Tragamonedas_1 = require("./Tragamonedas");
var QuienQuiereSerMillonario = /** @class */ (function (_super) {
    __extends(QuienQuiereSerMillonario, _super);
    function QuienQuiereSerMillonario() {
        var _this = _super.call(this) || this;
        _this.valoresGanadores = 5;
        _this.valoresPosibles = Math.pow(_this.valoresGanadores, _this.columnas);
        _this.tematica = "Quien Quiere ser millonario";
        _this.setProbabilidad();
        _this.pozoAcumulado = 1500;
        _this.valorApuesta = 150;
        _this.partidasGanadas = 0;
        _this.partidasPerdidas = 0;
        _this.partidasJugadas = 0;
        _this.estadistica = " no Jugo";
        return _this;
    }
    return QuienQuiereSerMillonario;
}(Tragamonedas_1.Tragamonedas));
exports.QuienQuiereSerMillonario = QuienQuiereSerMillonario;

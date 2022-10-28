"use strict";
exports.__esModule = true;
exports.Dados = void 0;
var Dados = /** @class */ (function () {
    function Dados(pDado1, pDado2) {
        this.dado1 = pDado1;
        this.dado2 = pDado2;
        this.resultado = 0;
    }
    Dados.prototype.mostrarResultado = function (pDado1, pDado2) {
    };
    Dados.prototype.azar = function (pMin, pMax) {
        return Math.floor(Math.random() * pMax - pMin) + pMin;
    };
    return Dados;
}());
exports.Dados = Dados;

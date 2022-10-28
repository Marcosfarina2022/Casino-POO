"use strict";
exports.__esModule = true;
exports.Cliente = void 0;
var Cliente = /** @class */ (function () {
    function Cliente(paramNombreJugador, paramDni) {
        this.nombreJugador = paramNombreJugador;
        this.dniJugador = paramDni;
    }
    Cliente.prototype.getNombreJugador = function () {
        return this.nombreJugador;
    };
    Cliente.prototype.setNombreJugador = function (paramNombreJugador) {
        this.nombreJugador = paramNombreJugador;
    };
    Cliente.prototype.getDniJugador = function () {
        return this.dniJugador;
    };
    Cliente.prototype.setDniJugador = function (paramDni) {
        this.dniJugador = paramDni;
    };
    return Cliente;
}());
exports.Cliente = Cliente;

"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.resultado = 0;
        this.apuestaInicial = 3000;
    }
    BlackJack.prototype.obtenerApuestaInicial = function () {
        return this.apuestaInicial;
    };
    BlackJack.prototype.repartir = function () {
        return Math.floor(Math.random() * 11 - 1) + 1;
    };
    BlackJack.prototype.jugar = function () {
        var opcion = require('readline-sync');
        var ingresar = 1;
        var pedirOtraCarta = 2;
        var salir = 0;
        var blackJack = 21;
        var as = 1;
        var asVariante = 11;
        while (ingresar === 1) {
            ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n' + '0 para salir' + '\n'));
            for (var i = 0; i < 2; i++) {
                if (this.resultado < blackJack) {
                    this.repartir();
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
            while (pedirOtraCarta === 2) {
                this.repartir();
                this.carta.push(this.repartir());
                pedirOtraCarta = Number(opcion.question('¿Desea pedir otra carta? Presione 2' + '\n' + 'Si desea salir oprima 0' + '\n'));
                for (var i = 0; i < 1; i++) {
                    if (blackJack < this.resultado) {
                        salir = Number(opcion.question('Uste perdió, desea seguir jugando? presione 1' + '\n' + this.resultado));
                    }
                    else if (opcion === 1) {
                        this.resultado -= as;
                        console.log('Se ha restado 1 por su elecion de AS' + '\n' + this.resultado);
                    }
                    else if (opcion === 2) {
                        this.resultado += asVariante;
                        console.log('Se ha sumado 11 por su elecion de AS' + '\n' + this.resultado);
                    }
                    else if (this.resultado === as) {
                        opcion = Number(opcion.question('Ha sacado un AS ' + this.carta + '\n' + 'tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n'));
                    }
                    if (this.resultado === blackJack) {
                        console.log('FELICIDADES' + '\n' + 'TIENE UN BLACK JACK [21]', this.resultado);
                    }
                }
            }
        }
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

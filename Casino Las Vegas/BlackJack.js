"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.resultado = 0;
        this.apuestaInicial = 3000;
        this.blackJack = 21;
    }
    BlackJack.prototype.obtenerApuestaInicial = function () {
        return this.apuestaInicial;
    };
    BlackJack.prototype.repartir = function () {
        return Math.floor((Math.random()) * (11 - 1 + 1) + 1);
    };
    BlackJack.prototype.primeraMano = function () {
        var opcion = require('readline-sync');
        var ingresar = 1;
        var salir = 0;
        var as = 1;
        var asVariante = 11;
        ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n'));
        if (ingresar === 1) {
            this.repartir();
            for (var i = 0; i < 2; i++) {
                this.carta.push(this.repartir());
                if (this.resultado < this.blackJack) {
                    this.resultado += this.carta[i];
                }
                console.log('Primera mano ' + this.carta[i]);
            }
            console.log('Total de la mano ' + this.resultado);
            var pedirCarta = Number(opcion.question('----Si el valor es menor a 21 podra seguir pidiendo una carta: ' + '\n' + '1- pedir otra carta---- ' + '\n'));
            switch (pedirCarta) {
                case 1:
                    // this.repartir();
                    for (var i = 0; i < 1; i++) {
                        var nuevaCarta = this.repartir();
                        this.carta.push(nuevaCarta);
                        console.log('su carta es ' + nuevaCarta + '\n');
                        if (this.resultado <= this.blackJack) {
                            this.resultado += nuevaCarta;
                            console.log("El resultado total es", this.resultado);
                        }
                        else if (nuevaCarta === as) {
                            var opcion1 = Number(opcion.question('tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n'));
                            switch (opcion1) {
                                case 1:
                                    this.resultado -= as;
                                    console.log('Se resto 1 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                                    break;
                                case 2:
                                    this.resultado += asVariante;
                                    console.log('Se sumo 11 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                                    break;
                            }
                        }
                        if (this.resultado === this.blackJack) {
                            console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
                        }
                        else if (this.blackJack < this.resultado) {
                            console.log('Usted perdio, supero 21');
                            this.resultado = 0;
                        }
                        break;
                    }
                case 2:
                    salir = Number(opcion.question('Presione 0 para salir del juego' + '\n'));
                    if (salir === 0) {
                        console.log('Gracias por jugar en nuestro juego');
                    }
                    break;
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        this.primeraMano();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

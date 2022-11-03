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
            var pedirCarta = Number(opcion.question('----Ingrese una opcion: ' + '\n' + '1- pedir otra carta---- ' + '\n' + '2- salir del juego----' + '\n'));
            var opcion1 = Number(opcion.question('tiene 2 alternativas:' + '\n' + 'Si oprime 1 se restara 1 del total en su mano' + '\n' + 'Si oprime 2 se sumaran 11 al total en su mano' + '\n'));
            switch (pedirCarta) {
                case 1:
                    for (var i = 0; i < 1; i++) {
                        this.repartir();
                        this.carta.push(this.repartir());
                        this.resultado += this.carta[i];
                        if (this.carta[i] === as) {
                            opcion1 === 1;
                            this.resultado -= as;
                            console.log('Se resto 1 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                        }
                        else {
                            opcion1 === 2;
                            this.resultado += asVariante;
                            console.log('Se sumo 11 del total de su mano' + '\n' + 'Resultado: ' + this.resultado);
                        }
                        if (this.resultado === this.blackJack) {
                            console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
                        }
                        else if (this.blackJack < this.resultado) {
                            this.resultado === 0;
                            console.log('Usted perdio');
                        }
                        else {
                            console.log("Se terminaron sus intentos");
                        }
                    }
                    break;
                case 2:
                    console.log("salir");
                    break;
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        this.primeraMano();
        this.resultado == 0;
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

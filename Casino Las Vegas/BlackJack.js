"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.apuestaInicial = 3000;
        this.blackJack = 21;
    }
    BlackJack.prototype.obtenerApuestaInicial = function () {
        return this.apuestaInicial;
    };
    BlackJack.prototype.repartir = function () {
        var cartas = new Array;
        cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
        cartas.push(Math.floor(Math.random() * (10 - 1) + 1));
        return cartas;
    };
    BlackJack.prototype.nuevaCarta = function () {
        var cartaNueva;
        cartaNueva = (Math.floor(Math.random() * (10 - 1) + 1));
        return cartaNueva;
    };
    BlackJack.prototype.obtenerResultado = function () {
        var contador = 0;
        for (var i = 0; i < this.carta.length; i++) {
            contador += this.carta[i];
        }
        return contador;
    };
    BlackJack.prototype.primeraMano = function () {
        var opcion = require('readline-sync');
        var salir = 0;
        var as = -1;
        var asVariante = 11;
        this.carta = this.repartir();
        console.log('Primera mano ' + this.carta + '\n' + 'Su total es ' + this.obtenerResultado() + '\n');
        var pedirCarta = 1;
        var cartaNueva;
        var aux = 0;
        while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
            cartaNueva = this.nuevaCarta();
            console.log('su carta es ' + cartaNueva + '\n');
            if (cartaNueva === 1) {
                aux = Number(opcion.question('Saco un AS, puede elegir si desea sumar o restar del total de su mano || oprimar 1 para sumar 11 || oprimar 2 para restar 1' + '\n'));
                if (aux === 1) {
                    cartaNueva = asVariante;
                }
                else {
                    cartaNueva = as;
                }
            }
            this.carta.push(cartaNueva);
            console.log(this.obtenerResultado());
            if (this.obtenerResultado() < this.blackJack) {
                pedirCarta = Number(opcion.question('Quiere una carta nueva presione 1 = si || 2 = no' + '\n'));
            }
        }
        if (this.obtenerResultado() === this.blackJack) {
            console.log('***FELICITACIONES' + '\n' + 'Saco un black Jack');
        }
        else if (this.blackJack < this.obtenerResultado()) {
            console.log('Usted perdio, supero 21');
        }
    };
    BlackJack.prototype.jugar = function () {
        this.primeraMano();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

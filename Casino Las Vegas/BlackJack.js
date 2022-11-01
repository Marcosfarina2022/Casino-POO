"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.resultado = 0;
    }
    /*public obtenerCredito():number{
        }*/
    BlackJack.prototype.repartir = function () {
        return Math.floor(Math.random() * 11 - 1) + 1;
    };
    BlackJack.prototype.jugar = function () {
        var opcion = require('readline-sync');
        var repartir = 1;
        var pedirOtraCarta = 2;
        var salir = 0;
        var blackJack = 21;
        var as = 1;
        var asVariante = 11;
        if (repartir === 1) {
            repartir = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n' || '0 para salir' + '\n'));
            this.repartir();
            for (var i = 0; i < 2; i++) {
                if (this.resultado < blackJack) {
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
            pedirOtraCarta = Number(opcion.question('¿Desea pedir otra carta? Presione 2' + '\n'));
            if (pedirOtraCarta === 2) {
                for (var i = 0; i < blackJack; i++) {
                    if (this.resultado < blackJack) {
                    }
                    else if (this.resultado === as) {
                        this.resultado -= as;
                        console.log(this.resultado);
                    }
                    else if (this.resultado === asVariante) {
                        this.resultado += asVariante;
                    }
                    else if (this.resultado === blackJack) {
                        console.log('Tiene un Black Jack', this.resultado);
                    }
                    else {
                        console.log('Usted perdio', this.resultado);
                    }
                }
            }
        }
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

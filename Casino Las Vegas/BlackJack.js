"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var RLS = require("readline-sync");
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
        return Math.floor(Math.random() * 11 - 1) + 1;
    };
    BlackJack.prototype.primeraMano = function () {
        var opcion = require('readline-sync');
        var ingresar = 1;
        var pedirOtraCarta = 2;
        var salir = 0;
        var as = 1;
        var asVariante = 11;
        if (ingresar === 1) {
            ingresar = Number(opcion.question('Presione 1 para comenzar y repartir ' + '\n'));
            for (var i = 0; i < 2; i++) {
                if (this.resultado < this.blackJack) {
                    this.repartir();
                    this.carta.push(this.repartir());
                    this.resultado += this.carta[i];
                    console.log('Primera mano ' + this.carta[i]);
                }
            }
            console.log('Total de la mano ' + this.resultado);
        }
    };
    BlackJack.prototype.segundaMano = function () {
        //let opcion1:number=1;
        var pedirCarta = RLS.question("----Ingrese una opción: --- 1 - pedir otra carta---- ||--- 2 - salir del juego----- \n");
        switch (pedirCarta) {
            case "1":
                if (this.resultado < this.blackJack) {
                    console.log("gracias por la carta");
                }
                else {
                    console.log("la carta es mayor a 21");
                }
                break;
            case "2":
                console.log("salir");
                break;
        }
    };
    BlackJack.prototype.jugar = function () {
        this.primeraMano();
        this.segundaMano();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.apuestaMinima = 1500;
        this.blackJack = 21;
    }
    BlackJack.prototype.obtenerApuestaMinima = function () {
        return this.apuestaMinima;
    };
    BlackJack.prototype.ingresarApuesta = function () {
        var ingresoApuesta = require('readline-sync');
        console.log('La puesta miníma para este juego es' + '\n' + '# ' + this.obtenerApuestaMinima() + '\n');
        var nuevaApuesta = 0;
        nuevaApuesta = Number(ingresoApuesta.question('Ingresar apuesta ===> ' + '\n'));
        switch (nuevaApuesta) {
            case 1:
                if (nuevaApuesta >= this.apuestaMinima) {
                    console.log('Apuesta ingresada $ ' + nuevaApuesta + '\n');
                }
                break;
            case 2:
                if (nuevaApuesta < this.apuestaMinima) {
                    console.log('La apuesta minima es $ ' + this.apuestaMinima + '\n');
                }
                break;
            default:
                break;
        }
        return nuevaApuesta;
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
        while (this.ingresarApuesta() >= this.obtenerApuestaMinima()) {
            var opcion = require('readline-sync');
            var as = -1;
            var asVariante = 11;
            this.carta = this.repartir();
            console.log('°°°° Su mano °°°°' + '\n' + '#  ' + this.carta + '\n' + '=-=-= Resultado =-=-=' + '\n' + '#  ' + this.obtenerResultado() + '\n');
            var pedirCarta = 1;
            var cartaNueva = void 0;
            var aux = 0;
            while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
                cartaNueva = this.nuevaCarta();
                console.log('=-=-= Su carta es =-=-=' + '\n' + '# ' + cartaNueva + '\n');
                if (cartaNueva === 1) {
                    console.log('*=*=*=* Saco un AS ' + cartaNueva + ' *=*=*=* ' + '\n' + '*=*=*=* Puede elegir 2 opciones *=*=*=*' + '\n');
                    console.log('Opción 1 se restara 1 del total de su mano' + '\n' + 'Opción 2 se sumaran 11 al total de su mano');
                    aux = Number(opcion.question('Restar ===> 1' + '\n' + 'Sumar ===> 2' + '\n'));
                    if (aux === 1) {
                        cartaNueva = as;
                    }
                    else {
                        cartaNueva = asVariante;
                    }
                }
                this.carta.push(cartaNueva);
                console.log('=-=-= Resultado =-=-=' + '\n' + '# ' + this.obtenerResultado() + '\n');
                if (this.obtenerResultado() < this.blackJack) {
                    var crupier = 'Crupier';
                    pedirCarta = Number(opcion.question('- ' + crupier + '\n' + 'Desea una nueva carta?' + '\n' + 'Nueva Carta ===> 1' + '\n' + 'Pararse ===> 2' + '\n'));
                }
            }
            if (this.obtenerResultado() === this.blackJack) {
                console.log('*=*=*=*FELICITACIONES=*=*=*' + '\n' + '*=*=*=*Saco un black Jack=*=*=*' + '\n');
            }
            else if (this.blackJack < this.obtenerResultado()) {
                console.log('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' +!=!=!' + '\n');
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        this.ingresarApuesta();
        this.primeraMano();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

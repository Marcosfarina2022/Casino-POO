"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.apuestaMinima = 1500;
        this.blackJack = 21;
    }
    BlackJack.prototype.ingresarApuesta = function () {
        var opcionApuesta = require('readline-sync');
        var nuevaApuesta = 0;
        console.log('La apuesta miníma para este juego es' + '\n' + '$' + this.obtenerApuestaMinima() + ' ' + 'Pesos' + '\n');
        var ingresoDeApuesta = Number(opcionApuesta.question('Desea ingresar apuesta?  SI ==> 1  ||  NO ==> 2  ' + '\n'));
        switch (ingresoDeApuesta) {
            case 1:
                while (ingresoDeApuesta === 1) {
                    nuevaApuesta = Number(opcionApuesta.question('Ingresar apuesta ===> ' + '\n'));
                    if (nuevaApuesta >= this.obtenerApuestaMinima()) {
                        console.log('Apuesta ingresada $ ' + nuevaApuesta + '\n');
                    }
                    else {
                        console.log('Apuesta insuficiente' + '\n');
                        var preguntarOtraVez = Number(opcionApuesta.question('Desea realizar una nueva apuesta?  SI ==> 1  ||  NO ==> 2  ' + '\n'));
                        switch (preguntarOtraVez) {
                            case 1:
                                nuevaApuesta = Number(opcionApuesta.question('Ingresar apuesta ===> ' + '\n'));
                                this.ingresarApuesta();
                                break;
                            case 2:
                                console.log('Gracias por elegir Black Jack, va a salir del juego.');
                                break;
                        }
                    }
                }
        }
        return nuevaApuesta;
    };
    BlackJack.prototype.obtenerApuestaMinima = function () {
        return this.apuestaMinima;
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
        this.ingresarApuesta();
        var opcion = require('readline-sync');
        var as = -1;
        var asVariante = 11;
        this.carta = this.repartir();
        console.log('°°°° Su mano °°°°' + '\n' + '#  ' + this.carta + '\n' + '=-=-= Resultado =-=-=' + '\n' + '#  ' + this.obtenerResultado() + '\n');
        var pedirCarta = 1;
        var cartaNueva;
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
            if (this.obtenerResultado() === this.blackJack) {
                console.log('*=*=*=*FELICITACIONES=*=*=*' + '\n' + '*=*=*=*Saco un black Jack=*=*=*' + '\n');
            }
            else if (this.blackJack < this.obtenerResultado()) {
                console.log('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' !=!=!' + '\n');
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        this.primeraMano();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;

"use strict";
exports.__esModule = true;
exports.BlackJack = void 0;
var colores = require('colors');
var BlackJack = /** @class */ (function () {
    function BlackJack() {
        this.carta = [];
        this.apuestaMinima = 1500;
        this.blackJack = 21;
        this.pozoGanador = 100000;
    }
    BlackJack.prototype.ingresarApuesta = function () {
        var opcionApuesta = require('readline-sync');
        var nuevaApuesta = 0;
        console.log(colores.brightBlue.italic('La apuesta miníma para este juego es') + '\n' + colores.brightGreen('$ ' + this.obtenerApuestaMinima() + ' ' + 'Pesos') + '\n');
        var ingresoDeApuesta = Number(opcionApuesta.question(colores.brightBlue.italic('Desea ingresar apuesta?') + '\n' + colores.blue.italic('SI ==> 1' + '\n' + 'NO ==> 2  ') + '\n'));
        switch (ingresoDeApuesta) {
            case 1:
                nuevaApuesta = Number(opcionApuesta.question(colores.brightGreen.bold('Ingresar apuesta ===> ' + '\n')));
                if (nuevaApuesta >= this.apuestaMinima) {
                    this.primeraMano();
                }
                else {
                    console.log(colores.red.bold('Apuesta insuficiente' + '\n'));
                    this.ingresarApuesta();
                }
            case 2:
                console.log(colores.brightBlue.italic('Gracias por elegir Black Jack, va a salir del juego.'));
                break;
        }
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
        var opcion = require('readline-sync');
        var as = -1;
        var asVariante = 11;
        this.carta = this.repartir();
        console.log(colores.blue.italic('°°°° Su mano °°°°') + '\n' + colores.red.bold('#  ' + this.carta) + '\n' + colores.blue.italic('=-=-= Total en mano =-=-=') + '\n' + colores.green.bold('#  ' + this.obtenerResultado()) + '\n');
        var pedirCarta = 1;
        var cartaNueva;
        var aux = 0;
        while (this.obtenerResultado() < this.blackJack && pedirCarta == 1) {
            cartaNueva = this.nuevaCarta();
            console.log(colores.brightBlue.italic('=-=-= Su carta es =-=-=') + '\n' + colores.red.bold('# ' + cartaNueva) + '\n');
            if (cartaNueva === 1) {
                console.log(colores.brightWhite.bold('*=*=*=* Saco un AS ') + colores.red.bold(cartaNueva + ' *=*=*=* ') + '\n' + colores.brightBlue.italic('*=*=*=* Puede elegir 2 opciones *=*=*=*') + '\n');
                console.log(colores.brightBlue(colores.brightBlue.italic('Opción 1 se restara 1 del total de su mano' + '\n' + 'Opción 2 se sumaran 11 al total de su mano')));
                aux = Number(opcion.question(colores.brightGreen.bold('Restar ===> 1') + '\n' + colores.brightRed.bold('Sumar ===> 2') + '\n'));
                if (aux === 1) {
                    cartaNueva = as;
                }
                else {
                    cartaNueva = asVariante;
                }
            }
            this.carta.push(cartaNueva);
            console.log(colores.brightBlue.italic('=-=-= Resultado =-=-=') + '\n' + colores.brightRed.bold('# ' + this.obtenerResultado()) + '\n');
            if (this.obtenerResultado() < this.blackJack) {
                var crupier = 'Crupier';
                pedirCarta = Number(opcion.question(colores.yellow.bold('- ') + colores.blue.bold(crupier) + '\n' + colores.brightBlue.italic('Desea una nueva carta?' + '\n' + colores.blue.italic.bold('Nueva Carta ===> 1' + '\n' + 'Pararse ===> 2')) + '\n'));
            }
            if (this.obtenerResultado() === this.blackJack) {
                console.log(colores.green.bold.italic(('*=*=*=* FELICITACIONES =*=*=* ' + '\n' + ' *=*=*=* Saco un black Jack =*=*=* ' + '\n' + colores.green.bold('Ha ganado el pozo acumulado de $ ' + this.pozoGanador) + '\n')));
            }
            else if (this.blackJack < this.obtenerResultado()) {
                console.log(colores.red.italic('!=!=! Usted perdio, supero ' + '# ' + this.blackJack + ' !=!=!') + '\n');
            }
        }
    };
    BlackJack.prototype.jugar = function () {
        this.ingresarApuesta();
    };
    return BlackJack;
}());
exports.BlackJack = BlackJack;
